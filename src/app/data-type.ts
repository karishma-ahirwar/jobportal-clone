export interface users {
    userId: string;
    password: string;
      email: string;
      role: 'jobseeker' | 'recruiter';
}

export interface recruiters extends users {
  result: any;
  message(message: any): unknown;
  companyName: string;
  phone: string;
  address: string;
}

export interface JobSeeker extends users {
  result: any;
  message(message: any): unknown;
  fullname: string;
  phoneNo: string;
  experience: string;
  resumeUrl: string;
}

export interface jobListings{
    id : number;
    jobListingId :number;
    title :string;
    company : string;
    location : string;
    postedDate : Date;
    description: string;
    requirements :string; 
    type :string;
    industry :string;
    recruiterId:string;
}

export interface jobApplications{
    jobListingId :number;
    jobSeekerId : number;
    applicationDate :Date;
    status:string;
    message :string;
    name : string;
    resume: string;
}
// user-profile.interface.ts

// export interface education {
//     id: number;
//     degree: string;
//     university: string;
//     year: string;
//   }
  
  export interface workExperience {
    id: number;
    title: string;
    company: string;
    startDate:Date;
    endDate: Date;
    description: string;
  }
  
  export interface skills {
    id: number;
    name: string;
  }
  
  export interface userProfiles {
    id: number;
    userId: string;
    degree: string;
    university: string;
    year: string;
    workExperience: workExperience[];
    skills: skills[];
    profilePicture: Blob;
    resumeUrl: string;
  }
  















//   export interface jobSekeer{
//     result: any;
//     message(message: any): unknown;
//     jobSekeerId :string;
//     Fullname :string;
//     email :string;
//     password :string;
//     phoneNo :string;
//     Experience :string;
//     ResumeUrl :string;
// }

// export interface recruiters{
//   body: any;
//   message(message: any): unknown;
//   result: any;
//   userId :string;
//   companyName:string;
//   email:string;
//   password :string;
//   phone:string;
//   address:string;
// }