
export interface User 
{
   created_date_at: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date },
   firstname: String,
   lastname: String,
   username: String,
   email: String,
   password: String,
   signintype: String,
   fbId: String,
   githubId: String,
   phonenumber: String,
   avatar: String,
   Idtoken: String,
   loggedinDate: Date,
   loggedoutDate: Date,
   role: { type: String, ref: 'roles' },
   org: String,
   org_country: String,
   org_sub1: String,
   org_sub2: String,
   org_sub3: String
}
