import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd } from '../../../tests-common/accounts'

describe('convertTransaction', () => {
  it.each([
    [
      {
        statmentId: 28673866185,
        acctKey: 11570661145,
        entryId: 49713923971,
        docKey: 12981475430,
        essId: null,
        nomination: 'Withdrawal - Amount: GEL180.00; ATM: Bank of Georgia, Tbilisi, Metro Didube; MCC:6011; Date: 04/04/2022 14:47; Card No: ****5585; Payment transaction amount and currency: 180.36 GEL',
        entryGroup: null,
        merchantId: 'ATM10802',
        postDate: 1649102400000,
        authDateStr: '04/04/2022 14:47',
        inpSysdate: 1649069240000,
        operationDate: 1649069220000,
        amount: 180.36,
        oppositeAmount: null,
        ccy: 'GEL',
        clientComment: null,
        canCopy: 'N',
        status: 'F',
        groupDescription: null,
        groupType: null,
        docNomination: null,
        beneficiary: null,
        bonusPoint: null,
        merchantName: 'საქართველოს ბანკი, თბილისი, მეტრო დიდუბე',
        merchantNameInt: 'Bank of Georgia, Tbilisi, Metro Didube',
        amountBase: 180.36,
        entryGroupDKey: 'text.entry.group.name.widthroval',
        entryGroupDValue: null,
        entryGroupNameId: 1,
        bonusInfo: null,
        essServiceId: null,
        merchantClientId: null,
        cashbackAmount: null,
        groupImageId: 35623075,
        nominationOriginal: 'Withdrawal - Amount: GEL180.00; ATM: Bank of Georgia, Tbilisi, Metro Didube; MCC:6011; Date: 04/04/2022 14:47; Card No: ****5585; Payment transaction amount and currency: 180.36 GEL',
        productName: null,
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isPrintable: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        benefProfileId: null,
        positiveSum: null,
        negativeSum: null,
        isInternalOperation: 'N',
        transferBankBic: null,
        deviceType: 'A',
        swiftGpiFlag: 'N',
        counterPartyClientKey: null,
        authDate: 1649016000000,
        bonusPointType: null,
        attachmentFileBase64: null,
        isRepeatAllowed: false,
        isTemplateAllowed: false,
        isDDSTOAlllowed: false,
        isStatementAllowed: true,
        isPrintAllowed: false,
        isReversalAvailable: false,
        entryIconBase64: null,
        merchantIconBase64: null,
        providerIconUrl: null,
        groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        benefProfilePicture: null,
        operationTitle: 'Bank of Georgia, Tbilisi, Metro Didube',
        entryDetailType: null,
        pfmId: 4743094293,
        pfmForecast: false,
        pfmCatId: 600,
        pfmCatName: null,
        pfmParentCatId: 590,
        pfmParentCatName: null,
        pfmRecurring: false,
        pfmSplit: false,
        pfmParentOpId: null,
        pfmTagId: null,
        pfmTagName: null,
        pfmTags: null,
        pfmComputable: true,
        isRuleCreationEnabled: false,
        canSplit: true,
        isCarTemplateAllowed: false
      },
      {
        comment: 'Cash withdrawal',
        date: new Date('2022-04-04T14:47:00.000+04:00'),
        hold: true,
        merchant: {
          country: null,
          city: 'Tbilisi',
          title: 'Bank of Georgia',
          location: null,
          mcc: 6011
        },
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: -0.36,
            id: '28673866185',
            invoice: null,
            sum: -180
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 180
          }
        ]
      }
    ],
    [
      {
        statmentId: 30813880631,
        acctKey: 11579306342,
        entryId: 51301027317,
        docKey: 13456086707,
        essId: null,
        nomination: 'Income - Amount GEL200.00; Cash deposit via Payment Machine , depositor: Anton Antonov',
        entryGroup: null,
        merchantId: null,
        postDate: 1653940800000,
        authDateStr: null,
        inpSysdate: 1654002054000,
        operationDate: 1653940800000,
        amount: -200,
        oppositeAmount: null,
        ccy: 'GEL',
        clientComment: null,
        canCopy: 'N',
        status: 'A',
        groupDescription: null,
        groupType: null,
        docNomination: null,
        beneficiary: null,
        bonusPoint: null,
        merchantName: null,
        merchantNameInt: null,
        amountBase: -200,
        entryGroupDKey: 'text.entry.group.name.Cash.Deposit',
        entryGroupDValue: null,
        entryGroupNameId: 3,
        bonusInfo: null,
        essServiceId: null,
        merchantClientId: null,
        cashbackAmount: null,
        groupImageId: 35623074,
        nominationOriginal: 'Cash deposit via Payment Machine , depositor: Anton Antonov',
        productName: null,
        prodGroup: 'PBS',
        entryType: 'PBS',
        printSwift: 'N',
        isPrintable: 'Y',
        printFormType: 'CASH_DEPOSIT',
        hasTransferBack: 'N',
        benefProfileId: null,
        positiveSum: null,
        negativeSum: null,
        isInternalOperation: 'N',
        transferBankBic: null,
        deviceType: null,
        swiftGpiFlag: 'N',
        counterPartyClientKey: null,
        authDate: null,
        bonusPointType: null,
        attachmentFileBase64: null,
        isRepeatAllowed: false,
        isTemplateAllowed: false,
        isDDSTOAlllowed: false,
        isStatementAllowed: true,
        isPrintAllowed: false,
        isReversalAvailable: false,
        entryIconBase64: null,
        merchantIconBase64: null,
        providerIconUrl: null,
        groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623074&hashCode=6C25CB878354B22540A8F301E88CD1DB',
        imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623074&hashCode=6C25CB878354B22540A8F301E88CD1DB',
        benefProfilePicture: null,
        operationTitle: 'Cash deposit via Payment Machine , depositor: Anton Antonov',
        entryDetailType: null,
        pfmId: 5157980281,
        pfmForecast: false,
        pfmCatId: 900,
        pfmCatName: null,
        pfmParentCatId: 840,
        pfmParentCatName: null,
        pfmRecurring: false,
        pfmSplit: false,
        pfmParentOpId: null,
        pfmTagId: null,
        pfmTagName: null,
        pfmTags: null,
        pfmComputable: true,
        isRuleCreationEnabled: false,
        canSplit: false,
        isCarTemplateAllowed: false
      },
      {
        comment: 'Cash deposit via Payment Machine , depositor: Anton Antonov',
        date: new Date('2022-05-31T17:00:54.000+04:00'),
        hold: false,
        merchant: null,
        movements: [
          {
            account: {
              id: '1337'
            },
            fee: 0,
            id: '30813880631',
            invoice: { instrument: 'GEL', sum: 200 },
            sum: 200
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: -200
          }
        ]
      }
    ],
    [
      {
        statmentId: 31124567662,
        acctKey: 11574837328,
        entryId: 51480228938,
        docKey: 13508448330,
        essId: null,
        nomination: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        entryGroup: null,
        merchantId: 'ATM11042',
        postDate: 1654459200000,
        authDateStr: '05/06/2022 16:49',
        inpSysdate: 1654501228000,
        operationDate: 1654433340000,
        amount: 1000,
        oppositeAmount: null,
        ccy: 'GEL',
        clientComment: null,
        canCopy: 'N',
        status: 'P',
        groupDescription: null,
        groupType: null,
        docNomination: null,
        beneficiary: null,
        bonusPoint: null,
        merchantName: 'სს საქართველოს ბანკი, ბათუმი, ზუბალაშვილის ქ. N18',
        merchantNameInt: 'Bank Of Georgia, Batumi, Zubalashvili st. 18',
        amountBase: 1000,
        entryGroupDKey: 'text.entry.group.name.widthroval',
        entryGroupDValue: null,
        entryGroupNameId: 1,
        bonusInfo: null,
        essServiceId: null,
        merchantClientId: null,
        cashbackAmount: null,
        groupImageId: 35623075,
        nominationOriginal: 'Withdrawal - Amount: GEL1,000.00; ATM: Bank Of Georgia, Batumi, Zubalashvili st. 18; MCC:6011; Date: 05/06/2022 16:49; Card No: ****6663; Payment transaction amount and currency: 1,000.00 GEL',
        productName: null,
        prodGroup: 'PLC',
        entryType: 'TRN',
        printSwift: 'N',
        isPrintable: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        benefProfileId: null,
        positiveSum: null,
        negativeSum: null,
        isInternalOperation: 'N',
        transferBankBic: null,
        deviceType: 'A',
        swiftGpiFlag: 'N',
        counterPartyClientKey: null,
        authDate: 1654372800000,
        bonusPointType: null,
        attachmentFileBase64: null,
        isRepeatAllowed: false,
        isTemplateAllowed: false,
        isDDSTOAlllowed: false,
        isStatementAllowed: true,
        isPrintAllowed: false,
        isReversalAvailable: false,
        entryIconBase64: null,
        merchantIconBase64: null,
        providerIconUrl: null,
        groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        benefProfilePicture: null,
        operationTitle: 'Bank Of Georgia, Batumi, Zubalashvili st. 18',
        entryDetailType: null,
        pfmId: 5201536918,
        pfmForecast: false,
        pfmCatId: 600,
        pfmCatName: null,
        pfmParentCatId: 590,
        pfmParentCatName: null,
        pfmRecurring: false,
        pfmSplit: false,
        pfmParentOpId: null,
        pfmTagId: null,
        pfmTagName: null,
        pfmTags: null,
        pfmComputable: true,
        isRuleCreationEnabled: false,
        canSplit: true,
        isCarTemplateAllowed: false
      },
      {
        date: new Date('2022-06-05T16:49:00+04:00'),
        hold: false,
        merchant: {
          country: null,
          city: 'Batumi',
          title: 'Bank Of Georgia',
          location: null,
          mcc: 6011
        },
        movements: [
          {
            account: { id: '1337' },
            fee: 0,
            id: '31124567662',
            invoice: null,
            sum: -1000
          },
          {
            account: {
              company: null,
              instrument: 'GEL',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 1000
          }
        ],
        comment: 'Cash withdrawal'
      }
    ],
    [
      {
        statmentId: 31493600859,
        acctKey: 11579166872,
        entryId: 51771269320,
        docKey: 13594067580,
        essId: null,
        nomination: 'Withdrawal - Amount: TRY250.00; ATM: SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey; MCC:6011; Date: 15/06/2022 22:09; Card No: ****4499; Payment transaction amount and currency: 52.93 GEL; Bank conversion rate (TRY-GEL): .1762',
        entryGroup: null,
        merchantId: 'Z2114001',
        postDate: 1655323200000,
        authDateStr: '15/06/2022 22:09',
        inpSysdate: 1655305752000,
        operationDate: 1655316540000,
        amount: 52.93,
        oppositeAmount: null,
        ccy: 'GEL',
        clientComment: null,
        canCopy: 'N',
        status: 'F',
        groupDescription: null,
        groupType: null,
        docNomination: null,
        beneficiary: null,
        bonusPoint: null,
        merchantName: 'SIDE MANAVGAT SB MANAVG>ANTALYA TR, თურქეთი',
        merchantNameInt: 'SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey',
        amountBase: 52.93,
        entryGroupDKey: 'text.entry.group.name.widthroval',
        entryGroupDValue: null,
        entryGroupNameId: 1,
        bonusInfo: null,
        essServiceId: null,
        merchantClientId: null,
        cashbackAmount: null,
        groupImageId: 35623075,
        nominationOriginal: 'Withdrawal - Amount: TRY250.00; ATM: SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey; MCC:6011; Date: 15/06/2022 22:09; Card No: ****4499; Payment transaction amount and currency: 52.93 GEL; Bank conversion rate (TRY-GEL): .1762',
        productName: null,
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isPrintable: 'N',
        printFormType: 'OTHER',
        hasTransferBack: 'N',
        benefProfileId: null,
        positiveSum: null,
        negativeSum: null,
        isInternalOperation: 'N',
        transferBankBic: null,
        deviceType: 'A',
        swiftGpiFlag: 'N',
        counterPartyClientKey: null,
        authDate: 1655236800000,
        bonusPointType: null,
        attachmentFileBase64: null,
        isRepeatAllowed: false,
        isTemplateAllowed: false,
        isDDSTOAlllowed: false,
        isStatementAllowed: true,
        isPrintAllowed: false,
        isReversalAvailable: false,
        entryIconBase64: null,
        merchantIconBase64: null,
        providerIconUrl: null,
        groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        benefProfilePicture: null,
        operationTitle: 'SIDE MANAVGAT SB MANAVG>ANTALYA TR, Turkey',
        entryDetailType: null,
        pfmId: 5275731173,
        pfmForecast: false,
        pfmCatId: 600,
        pfmCatName: null,
        pfmParentCatId: 590,
        pfmParentCatName: null,
        pfmRecurring: false,
        pfmSplit: false,
        pfmParentOpId: null,
        pfmTagId: null,
        pfmTagName: null,
        pfmTags: null,
        pfmComputable: true,
        isRuleCreationEnabled: false,
        canSplit: true,
        isCarTemplateAllowed: false
      },
      {
        date: new Date('2022-06-15T22:09:00+04:00'),
        hold: true,
        movements: [
          {
            account: { id: '1337' },
            id: '31493600859',
            invoice: { sum: -250, instrument: 'TRY' },
            sum: -52.93,
            fee: 0
          },
          {
            account: {
              company: null,
              instrument: 'TRY',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 250
          }
        ],
        merchant: {
          country: 'Turkey',
          city: 'ANTALYA TR',
          title: 'SIDE MANAVGAT SB MANAVG',
          location: null,
          mcc: 6011
        },
        comment: 'Cash withdrawal'
      }
    ]
  ])('converts cash transfer', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountGel)).toEqual(transaction)
  })

  it.each([
    [
      {
        statmentId: 50125651949,
        acctKey: 11576885104,
        entryId: 65947253139,
        docKey: 17916064436,
        essId: null,
        nomination: 'Withdrawal - Amount: USD500.00; ATM: Bank Of Georgia, Tbilisi, Kazbegi ave. 24g (2); MCC:6011; Date: 21/07/2023 09:53; Card No: ****4858; Payment transaction amount and currency: 500.00 USD; Bank conversion rate (USD-GEL): 2.615',
        entryGroup: null,
        merchantId: 'ATM11430',
        postDate: 1689969600000,
        authDateStr: '21/07/2023 09:53',
        inpSysdate: 1689918820000,
        operationDate: 1689918780000,
        amount: 500,
        oppositeAmount: null,
        ccy: 'USD',
        clientComment: null,
        canCopy: 'N',
        status: 'F',
        groupDescription: null,
        groupType: null,
        docNomination: null,
        beneficiary: null,
        bonusPoint: null,
        merchantName: 'სს საქართველოს ბანკი, თბილისი, ყაზბეგის გამზ. #24გ (2)',
        merchantNameInt: 'Bank Of Georgia, Tbilisi, Kazbegi ave. 24g (2)',
        amountBase: 1284.65,
        entryGroupDKey: 'text.entry.group.name.widthroval',
        entryGroupDValue: null,
        entryGroupNameId: 1,
        bonusInfo: null,
        essServiceId: null,
        merchantClientId: null,
        cashbackAmount: null,
        groupImageId: 35623075,
        nominationOriginal: 'Withdrawal - Amount: USD500.00; ATM: Bank Of Georgia, Tbilisi, Kazbegi ave. 24g (2); MCC:6011; Date: 21/07/2023 09:53; Card No: ****4858; Payment transaction amount and currency: 500.00 USD; Bank conversion rate (USD-GEL): 2.615',
        productName: null,
        prodGroup: 'PLC',
        entryType: 'GCE',
        printSwift: 'N',
        isPrintable: 'Y',
        printFormType: 'CASH_WITHDRAWAL',
        hasTransferBack: 'N',
        benefProfileId: null,
        positiveSum: null,
        negativeSum: null,
        isInternalOperation: 'N',
        transferBankBic: null,
        deviceType: 'A',
        swiftGpiFlag: 'N',
        counterPartyClientKey: null,
        gifUrl: null,
        gifId: null,
        authDate: 1689883200000,
        bonusPointType: null,
        attachmentFileBase64: null,
        isRepeatAllowed: false,
        isTemplateAllowed: false,
        isDDSTOAlllowed: false,
        isStatementAllowed: true,
        isPrintAllowed: true,
        isReversalAvailable: false,
        entryIconBase64: null,
        merchantIconBase64: null,
        providerIconUrl: null,
        groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623075&hashCode=D2617C8163F094FEA7E491FC27535EFA',
        benefProfilePicture: null,
        operationTitle: 'Bank Of Georgia, Tbilisi, Kazbegi ave. 24g (2)',
        entryDetailType: null,
        pfmId: 8432181802,
        pfmForecast: false,
        pfmCatId: 600,
        pfmCatName: null,
        pfmParentCatId: 590,
        pfmParentCatName: null,
        pfmRecurring: false,
        pfmSplit: false,
        pfmParentOpId: null,
        pfmTagId: null,
        pfmTagName: null,
        pfmTags: null,
        pfmComputable: true,
        isRuleCreationEnabled: false,
        canSplit: true,
        isCarTemplateAllowed: false
      },
      {
        date: new Date('2023-07-21T09:53:00+04:00'),
        hold: true,
        merchant: {
          city: 'Tbilisi',
          country: null,
          location: null,
          mcc: 6011,
          title: 'Bank Of Georgia'
        },
        movements: [
          {
            account: { id: '1338' },
            fee: 0,
            id: '50125651949',
            invoice: { instrument: 'USD', sum: -500 },
            sum: -500
          },
          {
            account: {
              company: null,
              instrument: 'USD',
              syncIds: null,
              type: 'cash'
            },
            fee: 0,
            id: null,
            invoice: null,
            sum: 500
          }
        ],
        comment: 'Cash withdrawal'
      }
    ]
  ])('converts cash transfer', (apiTransaction, transaction) => {
    expect(convertTransaction(apiTransaction, accountUsd)).toEqual(transaction)
  })
})
