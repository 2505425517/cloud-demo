package com.mywork.examine.pojo;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name="tb_examine")
public class Examine {
    @Id
    private Integer examineid;
    private Integer userid;
    private Integer projectid;
    private Integer examineStatus;
    private Integer examineResult;
    private String examineSuggest;

    public Integer getProjectid() {
        return projectid;
    }

    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
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

    public String getExamineSuggest() {
        return examineSuggest;
    }

    public void setExamineSuggest(String examineSuggest) {
        this.examineSuggest = examineSuggest;
    }
}
