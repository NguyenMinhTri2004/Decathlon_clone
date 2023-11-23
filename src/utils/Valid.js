export const validRegister = (user) => {

    const email = user.email
    const name = user.name
    const password = user.password
    const username = user.username
    const phoneNumber = user.phonenumber
    const firstName = user.firstName
    const lastName = user.lastName

    console.log(user.email)

    const errors  = [];

    if(!email.trim()) {
         errors.push("Vui lòng nhập email của bạn!")
    }else if (!validateEmail(email) ) {
         errors.push("Email sai định dạng!")
    }else if (!name.trim() ) {
     errors.push("Vui lòng nhập tài khoản!")
    }else if (!password.trim() ) {
     errors.push("Vui lòng nhập mật khẩu!")
    }else if (!username.trim()) {
     errors.push("Vui lòng nhập tên tài khoản!")
    }else if (!firstName.trim() ) {
     errors.push("Vui lòng tên lót của bạn!")
    }else if (!lastName.trim() ) {
     errors.push("Vui lòng nhập họ của bạn!")
    }else if (!name.trim() ) {
     errors.push("Vui lòng nhập số điện thoại của bạn!")
    }
     return {
         errMsg : errors,
         errLength : errors.length
     }

}



function validateEmail(email) 
{
var re = /\S+@\S+\.\S+/;
return re.test(email);
}
