let form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let fecha_corte = document.getElementById("fecha_corte").value.trim()
    
    let nombre = document.getElementById("nombre").value.trim()
    let enterprise = document.getElementById("enterprise").value.trim()
    let laboral = document.getElementById("laboral").value.trim()
    let cargo = document.getElementById("cargo").value.trim()

    let dias = document.getElementById("dias").value.trim()
    let horas = document.getElementById("horas").value.trim()
    let descanso = document.getElementById("descanso").value.trim()
    let motivo = document.getElementById("motivo").value.trim()

    let inicio = document.getElementById("inicio").value
    let fin = document.getElementById("fin").value
    let tiempo_total = document.getElementById("tiempo_total")
    let sub = document.getElementById("sub")

    let sal_basico1 = parseInt(document.getElementById("sal_basico1").value) || 0
    let sal_basico2 = parseInt(document.getElementById("sal_basico2").value) || 0
    let sal_basico3 = parseInt(document.getElementById("sal_basico3").value) || 0

    let tra_sup1 = parseInt(document.getElementById("tra_sup1").value) || 0
    let tra_sup2 = parseInt(document.getElementById("tra_sup2").value) || 0
    let tra_sup3 = parseInt(document.getElementById("tra_sup3").value) || 0

    let tra_sup_dom1 = parseInt(document.getElementById("tra_sup_dom1").value) || 0
    let tra_sup_dom2 = parseInt(document.getElementById("tra_sup_dom2").value) || 0
    let tra_sup_dom3 = parseInt(document.getElementById("tra_sup_dom3").value) || 0

    let aux_trans1 = parseInt(document.getElementById("aux_trans1").value) || 0
    let aux_trans2 = parseInt(document.getElementById("aux_trans2").value) || 0
    let aux_trans3 = parseInt(document.getElementById("aux_trans3").value) || 0

    let comi1 = parseInt(document.getElementById("comi1").value) || 0
    let comi2 = parseInt(document.getElementById("comi2").value) || 0
    let comi3 = parseInt(document.getElementById("comi3").value) || 0

    let res_1 = document.getElementById("res_1")
    let res_2 = document.getElementById("res_2")
    let res_3 = document.getElementById("res_3")

    let ts_df1 = document.getElementById("ts_df1")
    let ts_df2 = document.getElementById("ts_df2")
    let ts_df3 = document.getElementById("ts_df3")

    let dias_lab1 = parseInt(document.getElementById("dias_lab1").value) || 0
    let dias_lab2 = parseInt(document.getElementById("dias_lab2").value) || 0
    let dias_lab3 = parseInt(document.getElementById("dias_lab3").value) || 0

    let aux_deb1 = document.getElementById("aux_deb1")
    let aux_deb2 = document.getElementById("aux_deb2")
    let aux_deb3 = document.getElementById("aux_deb3")

    let sal_debe1 = parseInt(document.getElementById("sal_debe1").value) || 0
    let sal_debe2 = parseInt(document.getElementById("sal_debe2").value) || 0
    let sal_debe3 = parseInt(document.getElementById("sal_debe3").value) || 0

    let res_ad1 = document.getElementById("res_ad1")
    let res_ad2 = document.getElementById("res_ad2")
    let res_ad3 = document.getElementById("res_ad3")

    let aux_cesa1 = document.getElementById("aux_cesa1")
    let aux_cesa2 = document.getElementById("aux_cesa2")
    let aux_cesa3 = document.getElementById("aux_cesa3")

    let int_cesa1 = document.getElementById("int_cesa1")
    let int_cesa2 = document.getElementById("int_cesa2")
    let int_cesa3 = document.getElementById("int_cesa3")

    let prima_ser1 = document.getElementById("prima_ser1")
    let prima_ser2 = document.getElementById("prima_ser2")
    let prima_ser3 = document.getElementById("prima_ser3")

    let vacaciones1 = document.getElementById("vacaciones1")
    let vacaciones2 = document.getElementById("vacaciones2")
    let vacaciones3 = document.getElementById("vacaciones3")

    let indep_mora1 = document.getElementById("indep_mora1")
    let indep_mora2 = document.getElementById("indep_mora2")
    let indep_mora3 = document.getElementById("indep_mora3")

    let indep_des1 = parseInt(document.getElementById("indep_des1").value) || 0
    let indep_des2 = parseInt(document.getElementById("indep_des2").value) || 0
    let indep_des3 = parseInt(document.getElementById("indep_des3").value) || 0

    let indep_cesa1 = parseInt(document.getElementById("indep_cesa1").value) || 0
    let indep_cesa2 = parseInt(document.getElementById("indep_cesa2").value) || 0
    let indep_cesa3 = parseInt(document.getElementById("indep_cesa3").value) || 0

    let total_acree1 = document.getElementById("total_acree1")
    let total_acree2 = document.getElementById("total_acree2")
    let total_acree3 = document.getElementById("total_acree3")

    let total_no_va_mas = document.getElementById("total_no_va_mas")

    const startDate = new Date(inicio);
    const endDate = new Date(fin);
    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
    tiempo_total.innerText = differenceInDays;


        let sal_base_liquidacion1 = sal_basico1 + tra_sup1 + tra_sup_dom1 + aux_trans1 + comi1;
        let sal_base_liquidacion2 = sal_basico2 + tra_sup2 + tra_sup_dom2 + aux_trans2 + comi2;
        let sal_base_liquidacion3 = sal_basico3 + tra_sup3 + tra_sup_dom3 + aux_trans3 + comi3;

        res_1.innerText = sal_base_liquidacion1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        res_2.innerText = sal_base_liquidacion2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        res_3.innerText = sal_base_liquidacion3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let ts1 = (tra_sup1 + tra_sup_dom1) / 30 * dias_lab1
        let ts2 = (tra_sup2 + tra_sup_dom2) / 30 * dias_lab2
        let ts3 = (tra_sup3 + tra_sup_dom3) / 30 * dias_lab3

        ts_df1.innerText = ts1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        ts_df2.innerText = ts2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        ts_df3.innerText = ts3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let auxilio_transporte_debe1 = aux_trans1/ 30 * dias_lab1
        let auxilio_transporte_debe2 = aux_trans2/ 30 * dias_lab2
        let auxilio_transporte_debe3 = aux_trans3/ 30 * dias_lab3

        aux_deb1.innerText = auxilio_transporte_debe1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        aux_deb2.innerText = auxilio_transporte_debe2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        aux_deb3.innerText = auxilio_transporte_debe3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        res_ad1.innerText = (sal_debe1 + ts1 + auxilio_transporte_debe1).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        res_ad2.innerText = (sal_debe2 + ts2 + auxilio_transporte_debe2).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        res_ad3.innerText = (sal_debe3 + ts3 + auxilio_transporte_debe3).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })


        let cesantias1 = sal_base_liquidacion1 * (dias_lab1 / 369)
        let cesantias2 = sal_base_liquidacion2 * (dias_lab2 / 369)
        let cesantias3 = sal_base_liquidacion3 * (dias_lab3 / 369)

        aux_cesa1.innerText = cesantias1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        aux_cesa2.innerText = cesantias2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        aux_cesa3.innerText = cesantias3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let intereses_cesantias1 = (cesantias1 * dias_lab1 * 0.12) / 360
        let intereses_cesantias2 = (cesantias2 * dias_lab2 * 0.12) / 360 
        let intereses_cesantias3 = (cesantias3 * dias_lab3 * 0.12) / 360 

        int_cesa1.innerText = intereses_cesantias1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        int_cesa2.innerText = intereses_cesantias2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        int_cesa3.innerText = intereses_cesantias3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let prima_servicios1 = (sal_base_liquidacion1 / 2) * dias_lab1 / 180
        let prima_servicios2 = (sal_base_liquidacion2 / 2) * dias_lab2 / 180
        let prima_servicios3 = (sal_base_liquidacion3 / 2) * dias_lab3 / 180

        prima_ser1.innerText = prima_servicios1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        prima_ser2.innerText = prima_servicios2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        prima_ser3.innerText = prima_servicios3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let vacaciones_a1 = (sal_base_liquidacion1 - auxilio_transporte_debe1) * dias_lab1 / 720
        let vacaciones_a2 = (sal_base_liquidacion2 - auxilio_transporte_debe2) * dias_lab2 / 720
        let vacaciones_a3 = (sal_base_liquidacion3 - auxilio_transporte_debe3) * dias_lab3 / 720

        vacaciones1.innerText = vacaciones_a1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        vacaciones2.innerText = vacaciones_a2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        vacaciones3.innerText = vacaciones_a3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let indepnizacion_mora1 = (sal_basico1 / 30) * 348
        let indepnizacion_mora2 = (sal_basico2 / 30) * 348
        let indepnizacion_mora3 = (sal_basico3 / 30) * 348

        indep_mora1.innerText = indepnizacion_mora1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        indep_mora2.innerText = indepnizacion_mora2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        indep_mora3.innerText = indepnizacion_mora3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let total_acreencias1 = cesantias1 + intereses_cesantias1 + prima_servicios1 + vacaciones_a1 + indep_des1 + indepnizacion_mora1 + indep_cesa1
        let total_acreencias2 = cesantias2 + intereses_cesantias2 + prima_servicios2 + vacaciones_a2 + indep_des2 + indepnizacion_mora2 + indep_cesa2
        let total_acreencias3 = cesantias3 + intereses_cesantias3 + prima_servicios3 + vacaciones_a3 + indep_des3 + indepnizacion_mora3 + indep_cesa3

        total_acree1.innerText = total_acreencias1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        total_acree2.innerText = total_acreencias2.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        total_acree3.innerText = total_acreencias3.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        let total_completo = total_acreencias1 + total_acreencias2 + total_acreencias3 + sal_base_liquidacion1 + sal_base_liquidacion2 + sal_base_liquidacion3

        total_no_va_mas.innerText = total_completo.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
})

