const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'domen', 'email', 'phone', 'country', 'password','regPassword', 'confirmPassword', 'overview' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  /*
  if (Array.isArray(values.scripts)) {
    for (let i = 0; i < values.scripts; i++) {
      if (values.scripts[i].userAnswer == undefined) {
        
      }
      if (!values.scripts[i].nextQuestion == undefined) {
        
      }
    }
  }
  */

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (values.domen && !/^[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(values.domen)) {
    errors.domen = 'Invalid domen address'
  }
  if (values.password) {
    if (values.password.length < 6 || values.password.length > 32) {
      errors.password = 'Invalid password length (min 6 and max 32 symbols)'
    }
  }
  if (values.regPassword) {
    if (values.regPassword.length < 6 || values.regPassword.length > 32) {
      errors.regPassword = 'Invalid password length (min 6 and max 32 symbols)'
    }
  }
  
  if (values.regPassword != values.confirmPassword) {
    errors.regPassword = "Passwords don't match"
  }
  if (isNaN(Number(values.phone))) {
    errors.phone = 'Invalid phone number'
  }
  if (+values.startHours < 0 || +values.startHours > 23) {
    errors.startHours = 'Invalid time value'
  }
  if (+values.startMinutes < 0 || +values.startMinutes > 59) {
    errors.startMinutes = 'Invalid time value'
  }
  if (+values.endHours < 0 || +values.endHours > 23) {
    errors.endHours = 'Invalid time value'
  }
  if (+values.endMinutes < 0 || +values.endMinutes > 59) {
    errors.endMinutes = 'Invalid time value'
  }
// Add script validate  
  if(!values.clubName) {
    errors.clubName = 'Required'
  }
  if (!values.members || !values.members.length) {
    errors.members = { _error: 'At least one member must be entered' }
  } else {
    const membersArrayErrors = []
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.firstName) {
        memberErrors.firstName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (member && member.hobbies && member.hobbies.length) {
        const hobbyArrayErrors = []
        member.hobbies.forEach((hobby, hobbyIndex) => {
          if (!hobby || !hobby.length) {
            hobbyArrayErrors[hobbyIndex] =  'Required'
          }
        })
        if(hobbyArrayErrors.length) {
          memberErrors.hobbies = hobbyArrayErrors
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (member.hobbies.length > 5) {
          if(!memberErrors.hobbies) {
            memberErrors.hobbies = []
          }
          memberErrors.hobbies._error = 'No more than five hobbies allowed'
          membersArrayErrors[memberIndex] = memberErrors
        }
      }
    })
    if(membersArrayErrors.length) {
      errors.members = membersArrayErrors
    }
  }
//***********

  return errors
}


export default validate;