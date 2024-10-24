import { fetchJson, FetchOptions, FetchResponse } from '../../common/network'
import { getString } from '../../types/get'
import { InvalidLoginOrPasswordError } from '../../errors'
import { Preferences, Product, Session, Auth } from './models'
import { isArray } from 'lodash'
import { generateRandomString } from '../../common/utils'

const baseUrl = 'https://app2.timo.vn/'

async function fetchApi (url: string, options?: FetchOptions): Promise<FetchResponse> {
  return await fetchJson(baseUrl + url, options ?? {})
}

export async function fetchAuthorization ({ username, password}: Preferences, auth: Auth): Promise<Auth> {
  const response = await fetchApi('login',
    {
      method: 'POST',
      headers: {
        'X-Timo-Devicereg': auth.deviceReg
      },
      body: {
        username,
        'password': ZenMoney.getData('passwordSha512'),
        'lang': 'en'
      }
    }
  )
  auth.accessToken = getString(response.body, 'data.token')
  auth.deviceKey = getString(response.body, 'data.timoDeviceId')
  return auth
}

export async function fetchRequestOtp ({ username, password }: Preferences, auth: Auth): Promise<Auth> {
  const response = await fetchApi('login',
    {
      method: 'POST',
      headers: {
        'X-Timo-Devicereg': auth.deviceReg
      },
      body: {
        username,
        'password': ZenMoney.getData('passwordSha512'),
        'lang': 'en'
      }
    }
  )
  auth.accessToken = getString(response.body, 'data.token')
  auth.refNo = getString(response.body, 'data.refNo')
  return auth
}

export async function fetchSendOtp ({ username, password }: Preferences, auth: Auth, otpCode: string | null): Promise<Auth> {
  const response = await fetchApi('login/commit',
    {
      method: 'POST',
      headers: {
        'Token': auth.accessToken,
        'X-Timo-Devicereg': auth.deviceReg
      },
      body: {
        'lang': 'en',
        'otp': otpCode,
        'refNo': auth.refNo,
        'securityChallenge': otpCode,
        'securityCode': otpCode
      }
    }
  )
  auth.accessToken = getString(response.body, 'data.token')
  auth.deviceKey = getString(response.body, 'data.timoDeviceId') + ':WEB:WEB:246:WEB:desktop:zenmoney'
  return auth
}

export async function fetchAllAccounts (session: Session): Promise<unknown[]> {
  const response = await fetchApi('user/accountPreview',
    {
      method: 'GET',
      headers: {
        'Token': session.auth.accessToken,
        'X-Timo-Devicekey': session.auth.deviceReg
      }
    }
  )

  assert(isArray(response.body.data.accounts), 'cant get accounts array', response)
  return response.body.data.accounts
}

export async function fetchProductTransactions ({ id, accountType }: Product, session: Session, fromDate: Date, toDate: Date): Promise<unknown[]> {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  const response = await fetchApi(`user/account/transaction/list`,
    {
      method: 'POST',
      headers: {
        'Token': session.auth.accessToken,
        'X-Timo-Devicekey': session.auth.deviceReg
      },
      body: {
        'accountNo': id,
        'accountType': accountType,
        'fromDate': fromDate.toLocaleDateString('en-GB', options),
        'toDate': toDate.toLocaleDateString('en-GB', options)
      }
    }
  )

  //assert(isArray(response.body.data.items), 'cant get transactions array', response)
  return response.body.data.items
}
