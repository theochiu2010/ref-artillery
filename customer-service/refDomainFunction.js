module.exports = {
    isCustomerTierEmpty: isCustomerTierEmpty,
    isCustomerOrderInvalid: isCustomerOrderInvalid
  }
  
  function isCustomerTierEmpty(context, next) {
    const continueLooping = context.vars.tier !== 'SILVER';
    return next(continueLooping);
  }

  function isCustomerOrderInvalid(context, next) {
    const continueLooping = isNaN(context.vars.customerOrderId);
    return next(continueLooping);
  }