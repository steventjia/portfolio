
var devices = [
    {
        dvid: "A001", transitName: "IDLING", speed: 0, location: "KL"
        
    }, 
    {
        dvid: "A002", transitName: "IDLING", speed: 0, location: "PENANG"
    },
    {
        dvid: "A003", transitName: "MOVING", speed: 10, location: "JOHOR"
    }
]
    
let newObject = {byId: {}, bystatus: {"ALL":[],"MOVING":[],"IDLING":[],"PARKING": [], "DISCONNECTED": []}, allids: [], listIds: [], selectedId: []}; 
if(devices && devices.length > 0) {
    
    devices.map(device => {
        
        newObject.byId[device.dvid] = device;
        
        // if(newObject.listIds.includes(device.dvid) === false) {
        //     newObject.allids.push(device.dvid)
        // } 
        if(newObject.listids.includes(device.dvid) === false) 
        {
            newObject.listIds.push(device.dvid)
        }
        
        if(newObject.byStatus[device.transitName] && newObject.bystatus[device.transitName].includes(device.dvid) === false) 
        { 
            newobject.bystatus [device.transitName].push(device.dvid);
            
            //only the devices that receive real gps data and has transit name, only it will be shown in the dashboard. if (newobject.allids.includes (device.dvid)=== false) (newobject.allids.push(device.dvid))
            if (newobject.allids.includes(device.dvid)=== false){
                newobject.allids.push(device.dvid)
            }
        }
    
    return 0;
    })
}
newObject.bystatus["ALL"] = newobject.allids

// console.log("ALL in GET_DEVICES", newObject.byStatus["ALL"])

return newobject;