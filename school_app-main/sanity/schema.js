import Admit_Circular from "./schemas/Admit_Circular";
import Announcement from "./schemas/Announcement";
import ClassRutine from "./schemas/ClassRutine";
import Committee from "./schemas/Committee";
import Gallery from "./schemas/Gallery";
import HeroSection from "./schemas/HeroSection";
import Notice from "./schemas/Notice";
import Qoutes from "./schemas/Qoutes";
import Results from "./schemas/Results";
import Student from "./schemas/Student";
import Teachers from "./schemas/Teachers";
import staffs from "./schemas/staffs";

export const schema = {
  types: [HeroSection,Student,ClassRutine,Gallery,Teachers,Notice,Results,Qoutes,Committee,Announcement,staffs,Admit_Circular],
}
