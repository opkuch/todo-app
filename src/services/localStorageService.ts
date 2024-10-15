
  
function getData<T>(key: string): T | null {

    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) as T : null
  }
  
function setData<T>(key: string, payload: T): T | null {
    if (!key || !payload) {
        return null
    }
    localStorage.setItem(key, JSON.stringify(payload))
    return payload
  }

function removeData(key: string): void {
    if (!key) {
        return
    }
    localStorage.removeItem(key)
}

export {
  getData,
  setData,
  removeData
}