let currentQuestion = 0;
const questions = [
//     {
//         Sno:1,
//         type:"MCQ",
       
//         question:`You are a project manager responsible for overseeing a team working on a critical
// project for a client. During a review of the project timeline, you notice that a key milestone
// deadline has been incorrectly set one week earlier than agreed upon with the client.
// ,
//             <br><br> A. Review other project milestones to identify any additional discrepancies or errors,
//             <br> B.  Adjust the milestone deadline in the project timeline to reflect the correct agreement with the client.,
//             <br> C.  Inform the team members about the discrepancy and emphasize the importance of adhering to the revised timelines.,
//             <br> D. Immediately contact the client to discuss the discrepancy and renegotiate the deadline.
//             <br> E. Document the discrepancy and corrective actions taken for future reference.
//         `,
//         options : ["BCEDA","DBACE","ADCBE"],
//         correctAnswer:"DBACE",
//         explanation:"",
//     },
//     {
//         Sno:2,
//         type:"MCQ",
//         attachement:`\tA.	Immediately inform the project team and stakeholders to mitigate the impact.\n\tB.	Try to fix the error yourself without involving others.\n\tC.	Wait to see if the error resolves itself before taking action.\n\tD.	Inform your supervisor about the error and seek guidance.\n\tE.	Delegate the task of fixing the error to another team member.
//         `,
//         question:`You're a project manager and discover a critical error in the project timeline that could delay delivery. What action do you take?," ,
//         <br><br> A.	Immediately inform the project team and stakeholders to mitigate the impact.
//         <br> B.	Try to fix the error yourself without involving others.
//         <br> C.	Wait to see if the error resolves itself before taking action.
//         <br> D.	Inform your supervisor about the error and seek guidance.
//         <br> E.	Delegate the task of fixing the error to another team member.
//         `,
//         options : ["BCEAD","ACBDE","BCEDA"],
//         correctAnswer:"BCEDA",
//         explanation:"",
//     },
//     {
//         Sno:3,
//         type:"MCQ",
//         attachement:`\tA.	Contact the customer immediately and offer a refund or replacement.\n\tB.	Wait for the customer to report the issue before taking action.\n\tC.	Ignore the issue and hope the customer doesn't notice.\n\tD.	Inform the production team about the defect and ask for a solution.\n\tE.	Consult with your manager before deciding on a course of action.
//         `,
//         question:`As a sales representative, you realize that a product you sold to a customer has a manufacturing defect. What is your next step?",
//         <br><br> A.	Contact the customer immediately and offer a refund or replacement.
//         <br> B.	Wait for the customer to report the issue before taking action.
//         <br> C.	Ignore the issue and hope the customer doesn't notice.
//         <br> D.	Inform the production team about the defect and ask for a solution.
//         <br> E.	Consult with your manager before deciding on a course of action.`,
//         options : ["BDECA","BCDEA","ABDEC"],
//         correctAnswer:"BCDEA",
//         explanation:"",
//     },
//     {
//         Sno:4,
//         type:"MCQ",
//         attachement:`\tA.	Conduct an immediate investigation into the allegations.\n\tB.	Ignore the reports to avoid conflict among employees.\n\tC.	Wait for more reports before taking action.\n\tD.	Address the issue privately with the alleged parties involved.\n\tE.	Inform senior management about the reports for guidance.
//         `,
//         question:`You're an HR manager and receive reports of discrimination in the workplace. What action should you prioritize?",
//         <br><br> A.	Conduct an immediate investigation into the allegations.
//         <br> B.	Ignore the reports to avoid conflict among employees.
//         <br> C.	Wait for more reports before taking action.
//         ,br> D.	Address the issue privately with the alleged parties involved.
//         <br> E.	Inform senior management about the reports for guidance.`,
//         options : ["CDEBA","BCDEA","ECADB"],
//         correctAnswer:"BCDEA",
//         explanation:"",
//     },
//     {
//         Sno:5,
//         type:"MCQ",
//         attachement:`\tA.	Apologize to the customer and escalate the complaint to management.\n\tB.	Disregard the complaint as an isolated incident.\n\tC.	Investigate the complaint further before taking action.\n\tD.	Inform the colleague about the complaint and offer guidance on appropriate behavior.\n\tE.	Keep the complaint to yourself to avoid confrontation.
//         `,
//         question:`As a customer service representative, you receive a complaint about a rude interaction with a colleague. What should you do?",
//         <br><br> A.	Apologize to the customer and escalate the complaint to management.
//         <br> B.	Disregard the complaint as an isolated incident.
//         <br> C.	Investigate the complaint further before taking action.
//         <br> D.	Inform the colleague about the complaint and offer guidance on appropriate behavior.
//         <br> E.	Keep the complaint to yourself to avoid confrontation.`,
//         options : ["ABCDE","ACBED","ADCEB"],
//         correctAnswer:"ADCEB",
//         explanation:"",
//     },
//     {
//         Sno:6,
//         type:"MCQ",
//         attachement:`\tA.	Immediately investigate the discrepancies and rectify them.\n\tB.	Wait for someone else to notice the discrepancies before taking action.\n\tC.	Ignore the discrepancies and hope they resolve themselves.\n\tD.	Inform the accounting team about the discrepancies for clarification.\n\tE.	Review the financial reports again to confirm the discrepancies.
//         `,
//         question:`You're a finance manager and notice discrepancies in the quarterly financial reports. How do you proceed?",
//         <br><br> A.	Immediately investigate the discrepancies and rectify them.
//         <br> B.	Wait for someone else to notice the discrepancies before taking action.
//         <br> C.	Ignore the discrepancies and hope they resolve themselves.
//         <br> D.	Inform the accounting team about the discrepancies for clarification.
//         <br> E.	Review the financial reports again to confirm the discrepancies.`,
//         options : ["ADEBC","CDBEA","DBECA"],
//         correctAnswer:"ADEBC",
//         explanation:"",
//     },
//     {
//         Sno:7,
//         type:"MCQ",
//         attachement:`\tA.	Immediately retract the campaign and issue a correction.\n\tB.  Wait for customer complaints before taking action.\n\tC.	Ignore the error and continue with the campaign as planned.\n\tD.	Inform the marketing team about the error and brainstorm solutions.\n\tE.	Consult with legal counsel before making any decisions.
//         `,
//         question:`As a marketing coordinator, you realize that a promotional campaign you launched contains incorrect information. What should you do first?",
//         <br><br> A.	Immediately retract the campaign and issue a correction.
//         <br> B.  Wait for customer complaints before taking action.
//         <br> C.	Ignore the error and continue with the campaign as planned.
//         <br> D.	Inform the marketing team about the error and brainstorm solutions.
//         <br> E.	Consult with legal counsel before making any decisions.`,
//         options : ["ADCBE","ADBEC","ADBCE"],
//         correctAnswer:"ADBEC",
//         explanation:"",
//     },
//     {
//         Sno:8,
//         type:"MCQ",
//         attachement:`\tA.  Immediately reorder the item to prevent stockouts.\n\tB.	Wait until the next inventory cycle to reorder the item.\n\tC.	Ignore the low inventory levels and hope they improve on their own.\n\tD.	Inform the purchasing department about the low inventory levels for action.\n\tE.	Reduce promotions on the item to slow down sales until inventory levels are replenished.
//         `,
//         question:`You're a store manager and notice that inventory levels for a popular item are critically low. How do you handle the situation?",
//         <br><br> A.  Immediately reorder the item to prevent stockouts.
//         <br> B.	Wait until the next inventory cycle to reorder the item.
//         <br> C.	Ignore the low inventory levels and hope they improve on their own.
//         <br> D.	Inform the purchasing department about the low inventory levels for action.
//         <br> E.	Reduce promotions on the item to slow down sales until inventory levels are replenished.`,
//         options : ["ADEBC","ABCED","ADCEB"],
//         correctAnswer:"ADEBC",
//         explanation:"",
//     },
//     {
//         Sno:9,
//         type:"MCQ",
//         attachement:`\tA.  Notify the IT security team about the vulnerability for immediate action. \n\tB.	Ignore the vulnerability to avoid causing panic.\n\tC.	Wait for someone else to notice the vulnerability before taking action.\n\tD.	Attempt to fix the vulnerability yourself without informing anyone.\n\tE.	Consult with senior developers about the best course of action.
//         `,
//         question:`You're a software developer and discover a security vulnerability in the company's application. What is your immediate action?",
//         <br> A.  Notify the IT security team about the vulnerability for immediate action. 
//         <br> B.	Ignore the vulnerability to avoid causing panic.
//         <br> C.	Wait for someone else to notice the vulnerability before taking action.
//         <br> D.	Attempt to fix the vulnerability yourself without informing anyone.
//         <br> E.	Consult with senior developers about the best course of action.`,
//         options : ["BAECD","CADEB","AECDB"],
//         correctAnswer:"AECDB",
//         explanation:"",
//     },
    {
        Sno:10,
        type:"MCQ",
        attachement:`\tA.	Immediately reschedule one of the events to avoid conflicts.\n\tB.	Wait until the last minute to see if anyone notices the double booking.\n\tC.	Cancel one of the events and apologize to the affected participants.\n\tD.	Inform your supervisor about the double booking for guidance.\n\tE.	Delegate the task of rescheduling to another team member.
        `,
        question:`You're a training coordinator and realize that a training session scheduled for tomorrow has been double-booked with another event. How do you handle this situation?", 
        <br><br> A.	Immediately reschedule one of the events to avoid conflicts.
        <br> B.	Wait until the last minute to see if anyone notices the double booking.
        <br> C.	Cancel one of the events and apologize to the affected participants.
        <br> D.	Inform your supervisor about the double booking for guidance.
        <br> E.	Delegate the task of rescheduling to another team member.`,
        options : ["BADEC","AEDCB","ADECB"],
        correctAnswer:"ADECB",
        explanation:"",
    },
    {
        Sno:11,
        type:"MCQ",
        attachement:`\tA.	Immediately inform the project team and search for the missing document.\n\tB.	Wait for someone else to notice the missing document before taking action.\n\tC.	Ignore the missing document and hope it turns up eventually.\n\tD.	Notify the document owner about the missing document for resolution.\n\tE.	Consult with the IT department to see if the document can be recovered from backups.
        `,
        question:`You're a project coordinator and discover that a crucial project document is missing from the shared drive. What action should you take?",
        <br><br> A.	Immediately inform the project team and search for the missing document.
        <br> B.	Wait for someone else to notice the missing document before taking action.
        <br> C.	Ignore the missing document and hope it turns up eventually.
        <br> D.	Notify the document owner about the missing document for resolution.
        <br> E.	Consult with the IT department to see if the document can be recovered from backups.`,
        options : ["AEDCB","ADEBC","ACDEB"],
        correctAnswer:"ADEBC",
        explanation:"",
    },
    {
        Sno:12,
        type:"MCQ",
        attachement:`\tA.	Immediately reach out to the client to address their concerns and offer solutions.\n\tB.	Disregard the feedback as an isolated incident.\n\tC.	Wait for the client to bring up the feedback again before taking action.\n\tD.	Inform the sales team about the negative feedback for future reference.\n\tE.	Consult with your manager before responding to the client.
        `,
        question:`You're a customer success manager and receive negative feedback from a high-profile client. How do you respond?",
        <br><br> A.	Immediately reach out to the client to address their concerns and offer solutions.
        <br> B.	Disregard the feedback as an isolated incident.
        <br> C.	Wait for the client to bring up the feedback again before taking action.
        <br> D.	Inform the sales team about the negative feedback for future reference.
        <br> E.	Consult with your manager before responding to the client.`,
        options : ["BACDE","BCDEA","BDCEA"],
        correctAnswer:"BCDEA",
        explanation:"",
    },
    {
        Sno:13,
        type:"MCQ",
        attachement:`\tA.	Immediately place orders for replenishing the office supplies.\n\tB.	Wait until supplies are completely depleted before ordering more.\n\tC.	Ignore the low supplies and hope others notice and take action.\n\tD.	Inform department heads about the low supplies for their teams.\n\tE.	Check with other departments to see if they can share their supplies temporarily.
        `,
        question:`As an office manager, you notice that office supplies are running low. What is your next step?",
        <br><br> A.	Immediately place orders for replenishing the office supplies.
        <br> B.	Wait until supplies are completely depleted before ordering more.
        <br> C.	Ignore the low supplies and hope others notice and take action.
        <br> D.	Inform department heads about the low supplies for their teams.
        <br> E.	Check with other departments to see if they can share their supplies temporarily.`,
        options : ["CDEBA","CBDEA","ACDEB"],
        correctAnswer:"CDEBA",
        explanation:"",
    },
    {
        Sno:14,
        type:"MCQ",
        attachement:`\tA.	Immediately inform the development team to fix the bug.\n\tB.	Ignore the bug and hope it doesn't affect users.\n\tC.	Wait for users to report the bug before taking action.\n\tD.	Inform the project manager about the bug and seek guidance.\n\tE.	Document the bug and its impact for future reference.
        `,
        question:`You're a software tester and find a critical bug in the software just before its release. What should you prioritize?",
        <br><br> A.	Immediately inform the development team to fix the bug.
        <br> B.	Ignore the bug and hope it doesn't affect users.
        <br> C.	Wait for users to report the bug before taking action.
        <br> D.	Inform the project manager about the bug and seek guidance.
        <br> E.	Document the bug and its impact for future reference.`,
        options : ["CDEBA","CBEAD","CEDBA"],
        correctAnswer:"CDEBA",
        explanation:"",
    },
    {
        Sno:15,
        type:"MCQ",
        attachement:`\tA.	Immediately address the issue with the team and offer support.\n\tB.	Ignore the low morale to avoid confrontation.\n\tC.	Wait for team members to raise concerns before taking action.\n\tD.	Inform senior management about the low morale for intervention.\n\tE.	Organize team-building activities to boost morale.
        `,
        question:`You're a team leader and notice that morale among team members is low. What action do you take?",
        <br><br> A.	Immediately address the issue with the team and offer support.
        <br> B.	Ignore the low morale to avoid confrontation.
        <br> C.	Wait for team members to raise concerns before taking action.
        <br> D.	Inform senior management about the low morale for intervention.
        <br> E.	Organize team-building activities to boost morale.`,
        options : ["CEDAB","CADEB","CDEBA"],
        correctAnswer:"CDEBA",
        explanation:"",
    },
    {
        Sno:16,
        type:"MCQ",
        attachement:`\tA.	Immediately address the safety hazard to prevent accidents.\n\tB.	Ignore the hazard and hope it doesn't cause harm.\n\tC.	Wait for someone else to notice the hazard before taking action.\n\tD.	Inform the safety committee about the hazard for resolution.\n\tE.	Consult with health and safety experts for guidance on addressing the hazard.
        `,
        question:`You're a facilities manager and discover a safety hazard in the workplace. What is your immediate action?",
        <br><br> A.	Immediately address the safety hazard to prevent accidents.
        <br> B.	Ignore the hazard and hope it doesn't cause harm.
        <br> C.	Wait for someone else to notice the hazard before taking action.
        <br> D.	Inform the safety committee about the hazard for resolution.
        <br> E.	Consult with health and safety experts for guidance on addressing the hazard.`,
        options : ["CDEBA","DCEAB","CEBDA"],
        correctAnswer:"CDEBA",
        explanation:"",
    },
    {
        Sno:17,
        type:"MCQ",
        attachement:`\tA.	Immediately remove the inappropriate content and issue an apology.\n\tB.	Ignore the content and hope it goes unnoticed.\n\tC.	Wait for user complaints before taking action.\n\tD.	Inform the content creator about the inappropriate content for correction.\n\tE.	Consult with legal counsel before taking any action.
        `,
        question:`As a social media manager, you notice inappropriate content posted on the company's social media accounts. How do you handle this situation?",
        <br><br> A.	Immediately remove the inappropriate content and issue an apology.
        <br> B.	Ignore the content and hope it goes unnoticed.
        <br> C.	Wait for user complaints before taking action.
        <br> D.	Inform the content creator about the inappropriate content for correction.
        <br> E.	Consult with legal counsel before taking any action.`,
        options : ["EBCDA","BEDAC","BCDEA"],
        correctAnswer:"BCDEA",
        explanation:"",
    },
    {
        Sno:18,
        type:"MCQ",
        attachement:`\tA.	Immediately notify the recipient about the delay and provide updates.\n\tB.	Ignore the delay and hope the recipient doesn't notice.\n\tC.	Wait for the recipient to inquire about the delay before taking action.\n\tD.	Inform the shipping carrier about the delay in resolution.\n\tE.	Consult with senior management about potential solutions to expedite the shipment.
        `,
        question:`You're a logistics coordinator and find out that a shipment is delayed due to unforeseen circumstances. What do you do?",
        <br><br> A.	Immediately notify the recipient about the delay and provide updates.
        <br> B.	Ignore the delay and hope the recipient doesn't notice.
        <br> C.	Wait for the recipient to inquire about the delay before taking action.
        <br> D.	Inform the shipping carrier about the delay in resolution.
        <br> E.	Consult with senior management about potential solutions to expedite the shipment.`,
        options : ["EDBCA","CDEBA","CADEB"],
        correctAnswer:"CDEBA",
        explanation:"",
    },
    // {
    //     Sno:19,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately address the violations to ensure compliance.\n\tB.	Ignore the violations to avoid stirring up trouble.\n\tC.	Wait for regulatory agencies to discover the violations before taking action.\n\tD.	Inform the department heads about the violations for corrective action.\n\tE.	Consult with legal counsel about the best course of action to address the violations.
    //     `,
    //     question:`You're a compliance officer and discover regulatory violations in the company's operations. What is your immediate action?",
    //     <br><br> A.	Immediately address the violations to ensure compliance.
    //     <br> B.	Ignore the violations to avoid stirring up trouble.
    //     <br> C.	Wait for regulatory agencies to discover the violations before taking action.
    //     <br> D.	Inform the department heads about the violations for corrective action.
    //     <br> E.	Consult with legal counsel about the best course of action to address the violations.`,
    //     options : ["BADEC","BCDEA","BDCEA"],
    //     correctAnswer:"BCDEA",
    //     explanation:"",
    // },
    // {
    //     Sno:20,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately inform both parties about the scheduling conflict and reschedule one of the meetings.\n\tB.	Ignore the double booking and hope one of the parties cancels.\n\tC.	Wait for someone else to notice the double booking before taking action.\n\tD.	Inform your supervisor about the scheduling conflict for guidance.\n\tE.	Delegate the task of rescheduling to another team member.
    //     `,
    //     question:`As an executive assistant, you realize that an important meeting has been double-booked. What is your next step?",
    //     <br><br> A.	Immediately inform both parties about the scheduling conflict and reschedule one of the meetings.
    //     <br> B.	Ignore the double booking and hope one of the parties cancels.
    //     <br> C.	Wait for someone else to notice the double booking before taking action.
    //     <br> D.	Inform your supervisor about the scheduling conflict for guidance.
    //     <br> E.	Delegate the task of rescheduling to another team member.`,
    //     options : ["ACEDB","CDEBA","CAEDB"],
    //     correctAnswer:"CDEBA",
    //     explanation:"",
    // },
    // {
    //     Sno:21,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately investigate the connectivity issues to identify the root cause.\n\tB.	Ignore the reports and hope the issues resolve themselves.\n\tC.	Wait for more reports before taking action.\n\tD.	Inform the network administrator about the reports for resolution.\n\tE.	Consult with external network experts for assistance.
    //     `,
    //     question:`You're an IT support specialist and receive reports of network connectivity issues. What action should you prioritize?",
    //     <br><br> A.	Immediately investigate the connectivity issues to identify the root cause.
    //     <br> B.	Ignore the reports and hope the issues resolve themselves.
    //     <br> C.	Wait for more reports before taking action.
    //     <br> D.	Inform the network administrator about the reports for resolution.
    //     <br> E.	Consult with external network experts for assistance.`,
    //     options : ["BCDEA","EBCDA","CBEDA"],
    //     correctAnswer:"BCDEA",
    //     explanation:"",
    // },
    // {
    //     Sno:22,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately correct the discrepancies in the data to ensure campaign accuracy.\n\tB.	Ignore the discrepancies and hope they don't affect campaign performance.\n\tC.	Wait for campaign performance metrics to identify the impact of the discrepancies.\n\tD.	Inform the marketing team about the discrepancies for future campaigns.\n\tE.	Consult with data experts to validate the accuracy of the data.
    //     `,
    //     question:`You're a marketing analyst and discover discrepancies in the data used for a marketing campaign. What is your next step?",
    //     <br><br> A.	Immediately correct the discrepancies in the data to ensure campaign accuracy.
    //     <br> B.	Ignore the discrepancies and hope they don't affect campaign performance.
    //     <br> C.	Wait for campaign performance metrics to identify the impact of the discrepancies.
    //     <br> D.	Inform the marketing team about the discrepancies for future campaigns.
    //     <br> E.	Consult with data experts to validate the accuracy of the data.`,
    //     options : ["BDECA","BADCE","BDEAC"],
    //     correctAnswer:"BDECA",
    //     explanation:"",
    // },
    // {
    //     Sno:23,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately review staffing levels and reallocate resources to reduce wait times.\n\tB.	Ignore the complaints and hope they decrease over time.\n\tC.	Wait for more complaints before taking action.\n\tD.	Inform the IT department about the complaints about system upgrades.\n\tE.	Consult with call center experts for strategies to improve efficiency.
    //     `,
    //     question:`You're a customer service manager and receive multiple complaints about long wait times on the support hotline. What action should you prioritize?",
    //     <br><br> A.	Immediately review staffing levels and reallocate resources to reduce wait times.
    //     <br> B.	Ignore the complaints and hope they decrease over time.
    //     <br> C.	Wait for more complaints before taking action.
    //     <br> D.	Inform the IT department about the complaints about system upgrades.
    //     <br> E.	Consult with call center experts for strategies to improve efficiency.`,
    //     options : ["BDEAC","BDECA","BADEC"],
    //     correctAnswer:"BDECA",
    //     explanation:"",
    // },
    // {
    //     Sno:24,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately retract the article and issue a corrected version.\n\tB.	Ignore the errors and hope readers don't notice.\n\tC.	Wait for reader feedback before taking action.\n\tD.	Inform the content creator about the errors for correction.\n\tE.	Consult with the editorial team about the best approach for correction.
    //     `,
    //     question:`You're a content editor and notice grammatical errors in a published article. What is your immediate action?",
    //     <br><br> A.	Immediately retract the article and issue a corrected version.
    //     <br> B.	Ignore the errors and hope readers don't notice.
    //     <br> C.	Wait for reader feedback before taking action.
    //     <br> D.	Inform the content creator about the errors for correction.
    //     <br> E.	Consult with the editorial team about the best approach for correction.`,
    //     options : ["DBAEC","BDECA","DBEAC"],
    //     correctAnswer:"BDECA",
    //     explanation:"",
    // },
    // {
    //     Sno:25,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately inform the project stakeholders about the budget overrun and propose solutions.\n\tB.	Ignore the budget overrun and hope it doesn't impact project outcomes.\n\tC.	Wait for the next budget review meeting before addressing the issue.\n\tD.	Inform the finance department about the budget overrun for assistance.\n\tE.	Consult with the project team to identify areas where expenses can be reduced. 
    //     `,
    //     question:`As a project coordinator, you realize that the project budget has been exceeded due to unforeseen expenses. What action should you prioritize? ",
    //     <br><br> A.	Immediately inform the project stakeholders about the budget overrun and propose solutions.
    //     <br> B.	Ignore the budget overrun and hope it doesn't impact project outcomes.
    //     <br> C.	Wait for the next budget review meeting before addressing the issue.
    //     <br> D.	Inform the finance department about the budget overrun for assistance.
    //     <br> E.	Consult with the project team to identify areas where expenses can be reduced. `,
    //     options : ["ABCDE","AEDCB","ABEDC"],
    //     correctAnswer:"AEDCB",
    //     explanation:"",
    // },
    // {
    //     Sno:26,
    //     type:"MCQ",
    //     attachement:`\tA.	Immediately contact the supplier to inquire about the cause of the delays and discuss potential solutions.\n\tB.	Ignore the supplier's production delays and hope they resolve the issue internally.\n\tC.	Wait for the next scheduled meeting with the supplier before addressing the issue.\n\tD.	Inform the production team about the supplier's delays for contingency planning.\n\tE.	Consult with senior management about potential alternative suppliers to mitigate the impact of the delays.
    //     `,
    //     question:`You're an operations manager and discover that a key supplier is experiencing production delays that could affect your company's production schedule. What is your immediate action? ",
    //     <br><br> A.	Immediately contact the supplier to inquire about the cause of the delays and discuss potential solutions.
    //     <br> B.	Ignore the supplier's production delays and hope they resolve the issue internally.
    //     <br> C.	Wait for the next scheduled meeting with the supplier before addressing the issue.
    //     <br> D.	Inform the production team about the supplier's delays for contingency planning.
    //     <br> E.	Consult with senior management about potential alternative suppliers to mitigate the impact of the delays.`,
    //     options : ["ABCDE","AEDCB","ADEBC"],
    //     correctAnswer:"AEDCB",
    //     explanation:"",
    // },
    // {
    //     Sno:27,
    //     type:"MCQ",
    //     attachement:`\tA.	Ignore the reports and hope the situation resolves itself.\n\tB.	Wait for more employees to report incidents before taking action.\n\tC.	Inform the senior team member about the reports and seek their explanation.\n\tD.	Immediately launch an investigation into the reported incidents.\n\tE.	Consult with legal counsel before addressing the reported incidents
    //     `,
    //     question:`You're a human resources manager and discover that several employees have reported incidents of workplace harassment by a senior team member. What action should you prioritize?",
    //     <br><br> A.	Ignore the reports and hope the situation resolves itself.
    //     <br> B.	Wait for more employees to report incidents before taking action.
    //     <br> C.	Inform the senior team member about the reports and seek their explanation.
    //     <br> D.	Immediately launch an investigation into the reported incidents.
    //     <br> E.	Consult with legal counsel before addressing the reported incidents`,
    //     options : ["ADECB","ECDBA","DECBA"],
    //     correctAnswer:"DECBA",
    //     explanation:"",
    // },
];

const totalQuestions = questions.length;
const timeLimit = 10 * 60;
let timeRemaining = timeLimit;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();

    document.getElementById("next").addEventListener("click", () => {
        saveAnswer();
        currentQuestion++;
        loadQuestion();
    });

    document.getElementById("prev").addEventListener("click", () => {
        saveAnswer();
        currentQuestion--;
        loadQuestion();
    });

    document.getElementById("finish").addEventListener("click", finishQuiz);

    setInterval(updateTimer, 1000);
});

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const q = questions[currentQuestion];

    let tableHtml = "";
    if (q.table) {
        tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Rating 1-10</th>
                        <th>Call resolution</th>
                        <th>Average handling time</th>
                    </tr>
                </thead>
                <tbody>
                    ${q.tableData.map(row => `
                        <tr>
                            <td>${row.name}</td>
                            <td>${row.rating}</td>
                            <td>${row.resolution}</td>
                            <td>${row.handling}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }

    const optionsHtml = q.options.map(option => `
        <li>
            <input type="radio" name="q${currentQuestion}" value="${option}">
            ${option}
        </li>
    `).join('');

    questionEl.innerHTML = `
        <p>Q${currentQuestion + 1}. ${q.question}</p>
        ${tableHtml}
        
        <ul>${optionsHtml}</ul>
    `;
    // <p>${q.questionText}</p>
    updateNavigationButtons();
    updateQuestionNav();
    updateQuestionButtons();
}

function updateQuestionButtons() {
    const buttons = document.querySelector(".question-nav .buttons");
    buttons.innerHTML = ''; // Clear existing buttons
    questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.textContent = index + 1;
        button.className = "q-button";
        if (index === currentQuestion) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => {
            saveAnswer();
            currentQuestion = index;
            loadQuestion();
        });
        buttons.appendChild(button);
    });
}

function updateQuestionNav() {
    const buttons = document.querySelectorAll(".q-button");
    buttons.forEach((button, index) => {
        if (index === currentQuestion) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}


function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedOption) {
        questions[currentQuestion].user_ans = selectedOption.value;
    }
}

function updateNavigationButtons() {
    document.getElementById("prev").disabled = currentQuestion === 0;
    document.getElementById("next").disabled = currentQuestion === totalQuestions - 1;
}

function updateTimer() {
    if (timeRemaining <= 0) {
        finishQuiz();
    } else {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById("time").textContent = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
}


function finishQuiz() {
    saveAnswer(); // Save the final answer before finishing
    // Display results or perform final actions here
    alert("Time's up! Quiz submitted.");
}