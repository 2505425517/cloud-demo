package com.mywork.view.pojo;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="tb_project")
public class Project {
    @Id
    private Integer projectid;
    private String projectName;
    private String projectInfo;
    private String projectResource;
    private String projectScheme;
    private Integer expertNum;
    private String projectStarttime;
    private String projectEndtime;
    private Integer projectStatus;
    private String concept;
    private String projectResult;

    private String projectAddress;
    private String workUnit;
    private String userid;

    public Integer getProjectid() {
        return projectid;
    }

    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectInfo() {
        return projectInfo;
    }

    public void setProjectInfo(String projectInfo) {
        this.projectInfo = projectInfo;
    }

    public String getProjectResource() {
        return projectResource;
    }

    public void setProjectResource(String projectResource) {
        this.projectResource = projectResource;
    }

    public String getProjectScheme() {
        return projectScheme;
    }

    public void setProjectScheme(String projectScheme) {
        this.projectScheme = projectScheme;
    }

    public Integer getExpertNum() {
        return expertNum;
    }

    public void setExpertNum(Integer expertNum) {
        this.expertNum = expertNum;
    }

    public String getProjectStarttime() {
        return projectStarttime;
    }

    public void setProjectStarttime(String projectStarttime) {
        this.projectStarttime = projectStarttime;
    }

    public String getProjectEndtime() {
        return projectEndtime;
    }

    public void setProjectEndtime(String projectEndtime) {
        this.projectEndtime = projectEndtime;
    }

    public Integer getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(Integer projectStatus) {
        this.projectStatus = projectStatus;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public String getProjectResult() {
        return projectResult;
    }

    public void setProjectResult(String projectResult) {
        this.projectResult = projectResult;
    }

    public String getProjectAddress() {
        return projectAddress;
    }

    public void setProjectAddress(String projectAddress) {
        this.projectAddress = projectAddress;
    }

    public String getWorkUnit() {
        return workUnit;
    }

    public void setWorkUnit(String workUnit) {
        this.workUnit = workUnit;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
}
