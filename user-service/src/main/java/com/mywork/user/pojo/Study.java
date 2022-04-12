package com.mywork.user.pojo;

import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Table(name="tb_studyfield")
public class Study implements Serializable {

    private Integer fieldid;
    @Id
    private Integer userid;
    private String fieldname;
    private String fieldinfo;
    private String concept;

    public Integer getFieldid() {
        return fieldid;
    }

    public void setFieldid(Integer fieldid) {
        this.fieldid = fieldid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getFieldname() {
        return fieldname;
    }

    public void setFieldname(String fieldname) {
        this.fieldname = fieldname;
    }

    public String getFieldinfo() {
        return fieldinfo;
    }

    public void setFieldinfo(String fieldinfo) {
        this.fieldinfo = fieldinfo;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }
}
