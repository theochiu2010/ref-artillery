module.exports = {
    isCustomerTierNotEqualToSilver: isCustomerTierNotEqualToSilver,
    isCustomerOrderInvalid: isCustomerOrderInvalid
  }
  
  function isCustomerTierNotEqualToSilver(context, next) {
    context.vars.verifySilverCustomerLoopCount--;
    const continueLooping = context.vars.tier !== 'SILVER' && context.vars.verifySilverCustomerLoopCount > 0;
    return next(continueLooping);
  }

  function isCustomerOrderInvalid(context, next) {
    context.vars.createOrderLoopCount--;
    const continueLooping = isNaN(context.vars.customerOrderId) && context.vars.createOrderLoopCount > 0;
    return next(continueLooping);
  }