import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/loadCustomer/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidateMemberService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherMemberService = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}customerManager/transferToAnotherMemberService/id/anotherMemberServiceId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	

const transferToAnotherPlatform = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}customerManager/transferToAnotherPlatform/id/anotherPlatformId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}






const addPrivateMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addPrivateMessage/deliveryToId/name/content/link/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePrivateMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updatePrivateMessageProperties/customerId/id/name/content/link/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePrivateMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removePrivateMessageList/customerId/privateMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addLossAssessmentRecord/damagePersonId/bookCopyId/recordStoreId/lossComment/recordPersonId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLossAssessmentRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateLossAssessmentRecordProperties/customerId/id/lossComment/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLossAssessmentRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeLossAssessmentRecordList/customerId/lossAssessmentRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addMainOrder/customerId/title/mainOrderStatus/createTime/bookSharingPlatformId/originalAmount/actualAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateMainOrderProperties/customerId/id/title/mainOrderStatus/createTime/originalAmount/actualAmount/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMainOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeMainOrderList/customerId/mainOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookCopy/bookCopyVendorId/bookInfoId/bookCopySharingType/locationStoreId/evaluationPrice/bookCopyStatusId/wxaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookCopyProperties/customerId/id/bookCopySharingType/evaluationPrice/wxaId/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookCopyList/customerId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBorrowingHistory/borrowerId/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/lendingStoreId/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBorrowingHistoryProperties/customerId/id/lendingDatetime/bookName/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/lendingStoreType/freeLendingDays/freeLendingExpiredDatetime/overduePay/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBorrowingHistoryList/customerId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBorrowingExpiredSku/borrowerId/bookCopyId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBorrowingExpiredSkuProperties/customerId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBorrowingExpiredSkuList/customerId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookReview/reviewerId/bookInfoId/bookCopyId/reviewContent/bookPlazaId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookReviewProperties/customerId/id/reviewContent/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookReviewList/customerId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookReviewLike/replierId/bookReviewId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookReviewLikeProperties/customerId/id/likeType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookReviewLikeList/customerId/bookReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookCopySharingApplication/customerId/bookCopyQuantity/deliverMethod/destinationStoreId/contactAddress/contactName/contactMobile/status/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookCopySharingApplicationProperties/customerId/id/bookCopyQuantity/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookCopySharingApplicationList/customerId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addMemberServiceRevenue = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addMemberServiceRevenue/memberId/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeId/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/platformServiceRevenueRate/platformServiceRevenue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateMemberServiceRevenue = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateMemberServiceRevenueProperties/customerId/id/memberName/serviceStartDate/serviceEndDate/monthlyServiceFee/storeName/storeServiceCount/totalServiceCount/storeServiceRevenueRate/storeServiceRevenue/platformServiceRevenueRate/platformServiceRevenue/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeMemberServiceRevenueList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeMemberServiceRevenueList/customerId/memberServiceRevenueIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCustomerAccountTransaction/customerId/summary/amount/transactionTypeId/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomerAccountTransaction = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCustomerAccountTransactionProperties/customerId/id/summary/amount/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerAccountTransactionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCustomerAccountTransactionList/customerId/customerAccountTransactionIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCampaignRegisterHistory/registerMemberId/cancelled/campaignId/registerDatetime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCampaignRegisterHistoryProperties/customerId/id/cancelled/registerDatetime/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignRegisterHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCampaignRegisterHistoryList/customerId/campaignRegisterHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCampaignReview/reviewerId/reviewContent/campaignId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCampaignReviewProperties/customerId/id/reviewContent/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCampaignReviewList/customerId/campaignReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCampaignLike/replierId/campaignId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCampaignLikeProperties/customerId/id/likeType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCampaignLikeList/customerId/campaignLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCampaignReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCampaignReviewLike/replierId/reviewId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCampaignReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCampaignReviewLikeProperties/customerId/id/likeType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCampaignReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCampaignReviewLikeList/customerId/campaignReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addCustomerFootprint = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCustomerFootprint/customerId/title/description/hasRelatedItem/itemImage/itemTitle/itemDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateCustomerFootprint = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCustomerFootprintProperties/customerId/id/title/description/hasRelatedItem/itemImage/itemTitle/itemDescription/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeCustomerFootprintList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCustomerFootprintList/customerId/customerFootprintIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addShieldCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addShieldCustomer/shieldId/customerId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateShieldCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateShieldCustomerProperties/customerId/id/comments/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeShieldCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeShieldCustomerList/customerId/shieldCustomerIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const addInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addInform/informerId/campaignReviewId/bookReviewId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateInform = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateInformProperties/customerId/id/comments/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeInformList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeInformList/customerId/informIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const CustomerService = { view,
  load,
  addPrivateMessage,
  addLossAssessmentRecord,
  addMainOrder,
  addBookCopy,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  addBookReviewLike,
  addBookCopySharingApplication,
  addMemberServiceRevenue,
  addCustomerAccountTransaction,
  addCampaignRegisterHistory,
  addCampaignReview,
  addCampaignLike,
  addCampaignReviewLike,
  addCustomerFootprint,
  addShieldCustomer,
  addInform,
  updatePrivateMessage,
  updateLossAssessmentRecord,
  updateMainOrder,
  updateBookCopy,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  updateBookReviewLike,
  updateBookCopySharingApplication,
  updateMemberServiceRevenue,
  updateCustomerAccountTransaction,
  updateCampaignRegisterHistory,
  updateCampaignReview,
  updateCampaignLike,
  updateCampaignReviewLike,
  updateCustomerFootprint,
  updateShieldCustomer,
  updateInform,
  removePrivateMessageList,
  removeLossAssessmentRecordList,
  removeMainOrderList,
  removeBookCopyList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  removeBookReviewLikeList,
  removeBookCopySharingApplicationList,
  removeMemberServiceRevenueList,
  removeCustomerAccountTransactionList,
  removeCampaignRegisterHistoryList,
  removeCampaignReviewList,
  removeCampaignLikeList,
  removeCampaignReviewLikeList,
  removeCustomerFootprintList,
  removeShieldCustomerList,
  removeInformList,
  requestCandidateMemberService,
  requestCandidatePlatform,
  transferToAnotherMemberService,
  transferToAnotherPlatform }
export default CustomerService

