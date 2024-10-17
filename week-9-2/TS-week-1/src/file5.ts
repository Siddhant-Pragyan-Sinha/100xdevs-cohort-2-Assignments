type Employeees = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TechLead = Employeees & Manager;

const teamLead: TechLead = {
  name: "sdfnsf",
  startDate: new Date(), 
  department: "IT",
};
console.log(teamLead);
