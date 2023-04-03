import axios from 'axios'

const executeRequest = async (url, req) => {
    const reqInfo = req
    if (req !== undefined) {
        if (req.param !== undefined) {
            reqInfo.param = JSON.stringify(req.param)
        }
        if (req.data !== undefined) {
            reqInfo.data = JSON.stringify(req.data)
        }
    }
    const href = window.location.origin + window.location.pathname
    if (axios.defaults.headers.PageUrl !== href) {
        axios.defaults.headers.PageUrl = href
    }
    const response = await axios.post(url, reqInfo)
    const { data } = response
    return data
}

const downloadFile = (data, fileName) => {
    const downloadUrl = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = downloadUrl
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
}

const apiUtil = {
    auth: {
        querySingle: async req => await executeRequest('/auth-service/query-single', req),
        query: async req => await executeRequest('/auth-service/query', req),
        queryMultiple: async req => await executeRequest('/auth-service/query-multiple', req),
        execute: async req => await executeRequest('/auth-service/execute', req),
        executeScalar: async req => await executeRequest('/auth-service/execute-scalar', req),
        getSql: async logId => await executeRequest(`/auth-service/get-sql/${logId}`),
        exportExcel: async (url, req, fileName, func) => {
            const instance = axios.create({
                baseURL: window.serviceUrl,
                timeout: 60_000,
            })
            if (req !== undefined) {
                if (req.param !== undefined) {
                    req.param = JSON.stringify(req.param)
                }
                if (req.data !== undefined) {
                    req.data = JSON.stringify(req.data)
                }
            }
            instance
                .post(
                    url, req,
                    {
                        responseType: 'blob',
                    }
                )
                .then(({ data }) => {
                    downloadFile(data, fileName ?? 'ExportName.xlsx')
                })
                .finally(() => {
                    func()
                })
        },
        exportUsingTemplate: async (req, fileName, func) => {
            const instance = axios.create({
                baseURL: window.serviceUrl,
                timeout: 60_000,
            })
            if (req !== undefined) {
                if (req.param !== undefined) {
                    req.param = JSON.stringify(req.param)
                }
                if (req.data !== undefined) {
                    req.data = JSON.stringify(req.data)
                }
            }
            instance
                .post(
                    '/export/using-template', req,
                    {
                        responseType: 'blob',
                    }
                )
                .then(({ data }) => {
                    downloadFile(data, fileName ?? 'ExportName.xlsx')
                })
                .finally(() => {
                    func()
                })
        }
    },
    any: {
        querySingle: async req => await executeRequest('/any-service/query-single', req),
        query: async req => await executeRequest('/any-service/query', req),
        queryMultiple: async req => await executeRequest('/any-service/query-multiple', req),
        execute: async req => await executeRequest('/any-service/execute', req),
        executeScalar: async req => await executeRequest('/any-service/execute-scalar', req),
        sqlNow: async () => await executeRequest('/any-service/sql-now'),
        apiNow: async () => await executeRequest('/any-service/api-now'),
        excelToJson: async (formData) => {
            const href = window.location.origin + window.location.pathname
            if (axios.defaults.headers.PageUrl !== href) {
                axios.defaults.headers.PageUrl = href
            }
            const response = await axios.post('/any-service/excel-to-json', formData)
            const { data } = response
            return data
        },
        downloadSampleTemplate: (fileName, func) => {
            const instance = axios.create({
                baseURL: window.serviceUrl,
                timeout: 60_000,
            })
            instance
                .get(
                    `/SampleTemplates/${fileName}`,
                    {
                        responseType: 'blob',
                    }
                )
                .then(({ data }) => {
                    downloadFile(data, fileName ?? fileName)
                })
                .finally(() => {
                    func()
                })
        }
    }
}

export default apiUtil