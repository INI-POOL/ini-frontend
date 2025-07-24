export const formatDate = (timestamp: number,ret:String) => {
    const date = new Date(timestamp);
    const Y = date.getFullYear();
    const M = String(date.getMonth() + 1).padStart(2, '0');
    const D = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    if(ret=="M-D h:m:s"){
        return `${M}-${D} ${h}:${m}:${s}`;
    }
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
  };