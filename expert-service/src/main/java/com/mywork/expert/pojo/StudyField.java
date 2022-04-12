package com.mywork.expert.pojo;

import lombok.Data;

import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Data
public class StudyField implements Serializable {
    @Id
    private Integer userid;
    private Integer fieldid;
    List<Study> studys;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public List<Study> getStudys() {
        return studys;
    }

    public void setStudys(List<Study> studys) {
        this.studys = studys;
    }
}
