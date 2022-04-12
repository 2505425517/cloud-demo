package com.mywork.expert.pojo;

import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;


@Table(name="tb_expertcarrer")
public class ExpertCareer implements Serializable {

    @Id
    private Integer userid;
    List<Career> careers;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public List<Career> getCareers() {
        return careers;
    }

    public void setCareers(List<Career> careers) {
        this.careers = careers;
    }
}
