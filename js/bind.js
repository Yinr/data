var vmData = new Vue({
    el: '#data',
    data: medData,
    computed: {
        filteredData: function() {
            var datas = this.datas;
            var filterKey = this.searchTxt && this.searchTxt.toLowerCase();
            if (filterKey) {
                datas = datas.filter((row) => {
                    return Object.keys(row).some((key) => {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                });
            }
            return datas;
        }
    }
})
