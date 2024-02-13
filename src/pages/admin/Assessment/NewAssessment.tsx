import Button from "../../../components/ui/Button";

const NewAssessment = () => {
    return (
        <div className={`content-wrapper`}>
            <div className="content-header">
                <div>
                    <Button name={"Back"} className={'btn-nil'} />
                </div>
                <div className="bg-white mx-auto p-2 py-3 row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="report_name">Report Name</label>
                            <select id="report_name" required className="form-control">
                                <option value="">Select</option>
                                <option value="continuous_assessment">ধারাবাহিক মূল্যায়ন</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" required className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="class">Class</label>
                            <select id="class" required className="form-control">
                                <option value="">SELECT</option>
                                <option>Six</option>
                                <option>Seven</option>
                                <option>Eight</option>
                                <option>Nine</option>
                                <option>Ten</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" required className="form-control">
                                <option value="">SELECT</option>
                                <option value="Bangla">বাংলা</option>
                                <option value="English">ইংরেজি</option>
                                <option value="Math">গনিত</option>
                                <option value="Science">বিজ্ঞান</option>
                                <option value="History and Social Sciences">ইতিহাস ও সমাজ বিজ্ঞান</option>
                                <option value="Art and Culture">শিল্প ও সংস্কৃতি</option>
                                <option value="Digital technology">ডিজিটাল প্রযুক্তি</option>
                                <option value="Health protection">স্বাস্থ্য সুরক্ষা</option>
                                <option value="Life and livelihood">জীবন ও জীবিকা</option>
                                <option value="religion">ধর্ম</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select id="type" required className="form-control">
                                <option value="">SELECT</option>
                                <option value="PI">PI</option>
                                <option value="BI1">BI1</option>
                                <option value="BI2">BI2</option>
                                <option value="BI3">BI3</option>
                                <option value="BI4">BI4</option>
                                <option value="BI5">BI5</option>
                                <option value="BI6">BI6</option>
                                <option value="BI7">BI7</option>
                                <option value="BI8">BI8</option>
                                <option value="BI9">BI9</option>
                                <option value="BI10">BI10</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="chapter_name">Chapter Name</label>
                            <input type="text" id="chapter_name" required className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="teacher_name">Teacher Name</label>
                            <input type="text" id="teacher_name" required className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="note">Note</label>
                            <input type="text" id="note" required className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-info mt-3 mb-5" style={{ fontSize: '20px' }}>
                            তালিকা খুজুন
                        </button>
                    </div>
                </div>


                <div className="mx-2">
                    <table className="table">
                        <thead>
                            <th className="border border-dark">Roll  </th>
                            <th className="border border-dark">Name </th>
                            <th className="border border-dark">Score</th>
                        </thead>
                    </table>

                    <button className="btn btn-nil text-white rounded-0">Create Assessment</button>


                </div>

            </div>
        </div>
    );
};

export default NewAssessment;