package com.mywork.view.pojo;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="tb_project")
public class Project {
    @Id
    private Integer projectid;
    private String project_name;
    private String project_info;
    private String project_resource;
    private String project_scheme;
    private Integer expert_num;
    private String project_starttime;
    private String project_endtime;
    private Integer project_status;
    private String concept;
    private String project_result;

    private String project_address;
    private String work_unit;
    private String userid;

    public Integer getProjectid() {
        return projectid;
    }

    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getProject_info() {
        return project_info;
    }

    public void setProject_info(String project_info) {
        this.project_info = project_info;
    }

    public String getProject_resource() {
        return project_resource;
    }

    public void setProject_resource(String project_resource) {
        this.project_resource = project_resource;
    }

    public String getProject_scheme() {
        return project_scheme;
    }

    public void setProject_scheme(String project_scheme) {
        this.project_scheme = project_scheme;
    }

    public Integer getExpert_num() {
        return expert_num;
    }

    public void setExpert_num(Integer expert_num) {
        this.expert_num = expert_num;
    }

    public String getProject_starttime() {
        return project_starttime;
    }

    public void setProject_starttime(String project_starttime) {
        this.project_starttime = project_starttime;
    }

    public String getProject_endtime() {
        return project_endtime;
    }

    public void setProject_endtime(String project_endtime) {
        this.project_endtime = project_endtime;
    }

    public Integer getProject_status() {
        return project_status;
    }

    public void setProject_status(Integer project_status) {
        this.project_status = project_status;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public String getProject_result() {
        return project_result;
    }

    public void setProject_result(String project_result) {
        this.project_result = project_result;
    }

    public String getProject_address() {
        return project_address;
    }

    public void setProject_address(String project_address) {
        this.project_address = project_address;
    }

    public String getWork_unit() {
        return work_unit;
    }

    public void setWork_unit(String work_unit) {
        this.work_unit = work_unit;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
}
