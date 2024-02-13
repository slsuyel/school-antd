import { useState } from "react";

const StudentReportSearch = () => {
  const [classValue, setClassValue] = useState("");
  const [searchByValue, setSearchByValue] = useState("");
  const [religionValue, setReligionValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [stipendValue, setStipendValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [kotaValue, setKotaValue] = useState("");
  const [parentEarnValue, setParentEarnValue] = useState("");
  const [fatherOccupationValue, setFatherOccupationValue] = useState("");

  const handleSearch = () => {
    console.log("Class:", classValue);
    console.log("Search By:", searchByValue);
    console.log("Religion:", religionValue);
    console.log("Gender:", genderValue);
    console.log("Stipend:", stipendValue);
    console.log("Category:", categoryValue);
    console.log("Kota:", kotaValue);
    console.log("Parent Earn:", parentEarnValue);
    console.log("Father Occupation:", fatherOccupationValue);
  };

  return (
    <div className="container">
      <div className="row gutters-8">
        <div className="col-md-3 form-group">
          <select
            required
            className="form-control"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          >
            <option value="">SELECT CLASS</option>
            <option value="all">All</option>
            <option>Six</option>
            <option>Seven</option>
            <option>Eight</option>
            <option>Nine</option>
            <option>Ten</option>
          </select>
        </div>
        <div className="col-md-3 form-group">
          <select
            className="form-control"
            value={searchByValue}
            onChange={(e) => setSearchByValue(e.target.value)}
          >
            <option value="">নির্বাচন করুন</option>
            <option value="Religion">ধর্ম</option>
            <option value="StudentGender">লিঙ্গ</option>
            <option value="stipend">উপবৃত্তি</option>
            <option value="StudentCategory">শিক্ষার্থীর ধরন</option>
            <option value="StudentKota">কোটা</option>
            <option value="parentEarn">অভিভাবকের মাসিক আয়</option>
            <option value="StudentFatherOccupation">অভিভাবকের পেশা</option>
          </select>
        </div>
        {searchByValue === "Religion" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={religionValue}
              onChange={(e) => setReligionValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="Islam">ইসলাম</option>
              <option value="Hindu">হিন্দু</option>
              <option value="Buddhist">বৌদ্ধ</option>
              <option value="Christian">খ্রিষ্টান</option>
            </select>
          </div>
        )}
        {/* Additional Select Elements */}
        {searchByValue === "StudentGender" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={genderValue}
              onChange={(e) => setGenderValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="Male">পুরুষ</option>
              <option value="Female">মহিলা</option>
            </select>
          </div>
        )}
        {searchByValue === "stipend" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={stipendValue}
              onChange={(e) => setStipendValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="Yes">হ্যাঁ</option>
              <option value="No">না</option>
            </select>
          </div>
        )}
        {searchByValue === "StudentCategory" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="">নির্বাচন করুন</option>
              <option value="কর্মজীবী শিক্ষার্থী">কর্মজীবী শিক্ষার্থী</option>
              <option value="ভূমিহীন অভিভাবকের সন্তান">
                ভূমিহীন অভিভাবকের সন্তান
              </option>
              <option value="ক্ষুদ্র নৃ-গোষ্ঠী শিক্ষার্থী">
                ক্ষুদ্র নৃ-গোষ্ঠী শিক্ষার্থী
              </option>
              <option value="বিশেষ চাহিদা সম্পন্ন শিক্ষার্থী">
                বিশেষ চাহিদা সম্পন্ন শিক্ষার্থী
              </option>
              <option value="অনাথ/এতিম শিক্ষার্থী">অনাথ/এতিম শিক্ষার্থী</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
          </div>
        )}
        {searchByValue === "StudentKota" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={kotaValue}
              onChange={(e) => setKotaValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="মুক্তিযোদ্ধার সন্তান/নাতী-নাতনী">
                মুক্তিযোদ্ধার সন্তান/নাতী-নাতনী
              </option>
              <option value="অত্র বিদ্যালয়ে কর্মরত শিক্ষক, কর্মচারী ও ম্যানেজিং কমিটির সন্তান">
                অত্র বিদ্যালয়ে কর্মরত শিক্ষক, কর্মচারী ও ম্যানেজিং কমিটির
                সন্তান
              </option>
              <option value="প্রতিবন্ধী">প্রতিবন্ধী</option>
              <option value="কোনো কোটা নেই">কোনো কোটা নেই</option>
            </select>
          </div>
        )}
        {searchByValue === "parentEarn" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={parentEarnValue}
              onChange={(e) => setParentEarnValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="High">উচ্চ</option>
              <option value="Medium">মাঝারি</option>
              <option value="Low">নিম্ন</option>
            </select>
          </div>
        )}
        {searchByValue === "StudentFatherOccupation" && (
          <div className="col-md-3 form-group">
            <select
              className="form-control"
              value={fatherOccupationValue}
              onChange={(e) => setFatherOccupationValue(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="ব্যবসায়ি">ব্যবসায়ি</option>
              <option value="কৃষক">কৃষক</option>
              <option value="কৃষি শ্রমিক">কৃষি শ্রমিক</option>
              <option value="ডাক্তার">ডাক্তার</option>
              <option value="জেলে">জেলে</option>
              <option value="সরকারি চাকুরি">সরকারি চাকুরি</option>
              <option value="কামার/কুমোর">কামার/কুমোর</option>
              <option value="প্রবাসি">প্রবাসি</option>
              <option value="ক্ষুদ্র ব্যবসায়ি">ক্ষুদ্র ব্যবসায়ি</option>
              <option value="শিক্ষক">শিক্ষক</option>
              <option value="অকৃষি শ্রমিক">অকৃষি শ্রমিক</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
          </div>
        )}

        <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentReportSearch;
