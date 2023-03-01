module.exports = {
    isCustomerTierNotEqualToSilver: isCustomerTierNotEqualToSilver,
    isCustomerOrderInvalid: isCustomerOrderInvalid
  }
  
  function isCustomerTierNotEqualToSilver(context, next) {
    const continueLooping = context.vars.tier !== 'SILVER';
    return next(continueLooping);
  }

  function isCustomerOrderInvalid(context, next) {
    const continueLooping = isNaN(context.vars.customerOrderId);
    return next(continueLooping);
  }