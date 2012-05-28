package org.tdl.vireo.model;

/**
 * List of all possible ordering of Vireo submissions.
 * 
 * @author <a href="http://www.scottphillips.com">Scott Phillips</a>
 */
public enum SearchOrder {
	
	ID,
	SUBMITTER,
	
	DOCUMENT_TITLE,
	DOCUMENT_ABSTRACT,
	DOCUMENT_KEYWORDS,
	
	EMBARGO_TYPE,
	
	PRIMARY_DOCUMENT,
	
	COMMITTEE_MEMBERS,
	COMMITTEE_CONTACT_EMAIL,
	COMMITTEE_APPROVAL_DATE,
	COMMITTEE_EMBARGO_APPROVAL_DATE,
	COMMITTEE_DISPOSITION,
	
	SUBMISSION_DATE,
	APPROVAL_DATE,
	LICENSE_AGREEMENT_DATE,
	
	DEGREE,
	DEPARTMENT,
	COLLEGE,
	MAJOR,
	
	DOCUMENT_TYPE,
	GRADUATION_YEAR,
	GRADUATION_MONTH,
	GRADUATION_DATE,
	
	STATE,
	
	ASSGINEE,
	
	UMI_RELEASE,
	
	CUSTOM_ACTIONS,
	
	LAST_EVENT_ENTRY,
	LAST_EVENT_TIME
}
