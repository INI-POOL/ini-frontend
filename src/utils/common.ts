export const formatDate = (timestamp: number,ret:String) => {
    const date = new Date(timestamp*1000);
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

  export const  formatLargeNumber=(value:any)=> {
    if (typeof value !== 'number' || isNaN(value)) return '-'+" ";
    const units = ['', 'K', 'M', 'G', 'T', 'P'];
    let index = 0;
  
    while (value >= 1000 && index < units.length - 1) {
      value /= 1000;
      index++;
    }
  
    return value.toFixed(2).replace(/\.00$/, '') +" "+units[index];
  }

  export const formatWalletAddress=(address:string, prefixLength = 6, suffixLength = 4) =>{
    if (!address || address.length <= prefixLength + suffixLength) return address;
    return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
  }
  