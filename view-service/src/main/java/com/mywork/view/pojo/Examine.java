package com.mywork.view.pojo;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="tb_examine")
public class Examine {
    @Id
    private Integer examineid;
    private Integer userid;
    private Integer projectid;
    private Integer examineStatus;
    private Integer examineResult;
    private Integer examineScore;
    private String examineSuggest;

    @Override
    public String toString() {
        return "Examine{" +
                "examineid=" + examineid +
                ", userid=" + userid +
                ", projectid=" + projectid +
                ", examineStatus=" + examineStatus +
                ", examineResult=" + examineResult +
                ", examineScore=" + examineScore +
                ", examineSuggest='" + examineSuggest + '\'' +
                '}';
    }

    public Integer getExamineid() {
        return examineid;
    }

    public void setExamineid(Integer examineid) {
        this.examineid = examineid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getProjectid() {
        return projectid;
    }

    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
    }

    public Integer getExamineStatus() {
        return examineStatus;
    }

    public void setExamineStatus(Integer examineStatus) {
        this.examineStatus = examineStatus;
    }

    public Integer getExamineResult() {
        return examineResult;
    }

    public void setExamineResult(Integer examineResult) {
        this.examineResult = examineResult;
    }

    public Integer getExamineScore() {
        return examineScore;
    }

    public void setExamineScore(Integer examineScore) {
        this.examineScore = examineScore;
    }

    public String getExamineSuggest() {
        return examineSuggest;
    }

    public void setExamineSuggest(String examineSuggest) {
        this.examineSuggest = examineSuggest;
    }
}
