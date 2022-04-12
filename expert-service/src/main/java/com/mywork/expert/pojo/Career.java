package com.mywork.expert.pojo;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;


@Table(name="tb_career")
public class Career implements Serializable {

    @Id
    private Integer careerid;

    private Integer userid;
    private String workUnit;
    private String jobName;
    private String jobInfo;
    private String jobStarttime;
    private String jobEndtime;
    private String identify;

    public Integer getCareerid() {
        return careerid;
    }

    public void setCareerid(Integer careerid) {
        this.careerid = careerid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getWorkUnit() {
        return workUnit;
    }

    public void setWorkUnit(String workUnit) {
        this.workUnit = workUnit;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getJobInfo() {
        return jobInfo;
    }

    public void setJobInfo(String jobInfo) {
        this.jobInfo = jobInfo;
    }

    public String getJobStarttime() {
        return jobStarttime;
    }

    public void setJobStarttime(String jobStarttime) {
        this.jobStarttime = jobStarttime;
    }

    public String getJobEndtime() {
        return jobEndtime;
    }

    public void setJobEndtime(String jobEndtime) {
        this.jobEndtime = jobEndtime;
    }

    public String getIdentify() {
        return identify;
    }

    public void setIdentify(String identify) {
        this.identify = identify;
    }
}
