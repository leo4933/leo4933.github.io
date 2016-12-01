$('#dataForm').validate({
  //验证规则
  rules:{
    title:{
      required:true,
      minlength:3,
      maxlength:6,
      
    }
  }
});
