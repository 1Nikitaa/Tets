import { Profile } from "../components/profile";
import { Intrest } from "../components/intrest";
import { Settings } from "../components/settings";
export default tabConfig = [
  {
    name: "Profile",
    componentName: Profile,
    errorMsg:{
      name:"Enter correct  Name ",
      age: 'Enter correct  Age',
      email: "Enter correct  email",
    }
  },
  {
    name: "Intrest",
    componentName: Intrest,
  },
  {
    name: "Settings",
    componentName: Settings,
  },
];


