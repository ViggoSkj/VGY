وثيقة = document
رقم = Number
فاصل_واضح= clearInterval
الحصول_على_العنصر_بواسطة_المعرف= وثيقة.getElementById

function عرض_الفرز(arrayRowId, sortingRowId) {
    const صف_المصفوفة = وثيقة.الحصول_على_العنصر_بواسطة_المعرف(arrayRowId)
    const صف_الفرز = وثيقة.الحصول_على_العنصر_بواسطة_المعرف(sortingRowId)
    let توقيت = []
    let فترات = []

    const slideDown = () => {
        const children = Array.from(صف_المصفوفة.children)
        children.forEach(c => {
            صف_الفرز.appendChild(c)
        })   
    }

    const sort = () => {
        Array.from(صف_الفرز.children).forEach(طفل => {
            const وقت = رقم(طفل.innerText)*1000

            let الوقت_الحالي = وقت/1000.0
            let فاصلة = setInterval(() => {
                if (الوقت_الحالي < 0) {
                    فاصل_واضح(فاصلة)
                    فترات = فترات.filter(i => i !== فاصلة)
                }
                طفل.innerText = `${طفل.getAttribute("data-number")}: ${الوقت_الحالي.toFixed(1)}s`
                الوقت_الحالي -= 0.1
            }, 100)
            فترات.push(فاصلة)

            توقيت.push(setTimeout(() => {
                صف_المصفوفة.appendChild(طفل)
                فاصل_واضح(فاصلة)
                طفل.innerText = طفل.innerText.split(":")[0]
            }, وقت))
        })
    }

    const setNumbers = (عنصر) => {
        صف_المصفوفة.replaceChildren([])
        صف_الفرز.replaceChildren([])

        توقيت.forEach(timer => {
            clearTimeout(timer)
        })
        فترات.forEach(interval => {
            فاصل_واضح(interval)
        })
        فترات = []
        توقيت = []

        عنصر.forEach(n => {
            const عنصر = وثيقة.createElement("p")
            عنصر.innerText = n
            عنصر.setAttribute("data-number", n)
            صف_المصفوفة.appendChild(عنصر)
        })
    }

    return {
        setNumbers,
        slideDown,
        sort
    }
}