var action.devices = [
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

newObject = { 
    byId: {}, 
    bystatus: { 
        "ALL": ["A001", "A002","A003"], 
        "MOVING": ["A003"], 
        "IDLING": ["A001", "A002"], 
        "PARKING": [], 
        "DISCONNECTED": [] 
    }, 
    allids: [ "A001", "A002","A003" ], 
    listIds: ["A001", "A002","A003"], 
    selectedId: state.selectedId 
}; 
