function TinyTable(tableId) {
    let headers = []
    let rows = []
    let table = document.querySelector(`#${tableId}`)

    let thead = table.querySelector("thead")
    let tbody = table.querySelector("tbody")

    if (thead === null) {
        table.appendChild(document.createElement("thead"))
        thead = table.querySelector("thead")
    }
    if (tbody === null) {
        table.appendChild(document.createElement("tbody"))
        tbody = table.querySelector("tbody")
    }


    if (table.nodeName === "TABLE") {
        console.log(1)
    } else {
        throw "ERRR"
    }

    return {
        addHeader: function (header) {
            headers.push(header)
            console.log(this)
            return this
        },

        rowLength: function () {
            return headers.length
        },

        addRow: function (row) {
            if (row.length === this.rowLength()) {
                tbody.innerHTML += '<tr>'
                tbody.innerHTML += row.reverse().map(e => `<td>${e}</td>`).reduce((e, acc) => acc += e)
                tbody.innerHTML += '</tr>'

            } else
                throw "ops"
        },

        build: function () {
            thead.innerHTML = headers.reverse().map((e) => `<th>${e}</th>`).reduce((e, acc) => acc += e)
            return this
        }
    }
}
