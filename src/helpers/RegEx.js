const ValidationRules = ()=>{

    const RegexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const RegexMobile = /^[0-9]{9}$/
    const RegexDni = /^\d{8}(?:[-\s]\d{4})?$/
    const RegexEdad = /^[0-9]{1,2}$/
    const RegexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

    return {
        RegexName,
        RegexMobile,
        RegexDni,
        RegexEdad,
        RegexEmail
    }

}

export default ValidationRules