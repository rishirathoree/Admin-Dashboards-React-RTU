
import React, { useState } from "react";
import { Trash, House } from "phosphor-react";
import {Check,X} from 'phosphor-react'
import roomImage from '../../../../assets/images/hotel.png'
import DeleteModalComponent from "../../../common/Modals/DeleteModal";
import { EmailViewerModal } from "./Index";
const NotificationTable = () => {

      const generateRandomReservation = () => {
        
        const emailMessages = [
          `Subject: Invitation to Attend Product Launch Event\n\nDear [Recipient's Name],\n\nWe are thrilled to extend an invitation to you for our upcoming product launch event, where we will unveil our latest innovations in [industry/sector].\n\nDate: [Event Date]\nTime: [Event Time]\nLocation: [Event Venue]\n\nJoin us for an evening filled with excitement, networking opportunities, and exclusive insights into our newest offerings. Whether you're a loyal customer, industry partner, or simply interested in exploring cutting-edge solutions, we'd be honored to have you with us.\n\nPlease RSVP by [RSVP Deadline] to confirm your attendance. Should you have any questions or require further information, feel free to contact us at [Contact Email/Phone Number].\n\nWe look forward to welcoming you and sharing this memorable occasion together.\n\nWarm regards,\n\n[Your Name]\n[Your Position]\n[Your Company/Organization]`,
          `Subject: Urgent: Action Required - Payment Overdue\n\nDear [Recipient's Name],\n\nWe hope this message finds you well. We would like to bring to your attention that your payment for invoice #123456 is now overdue.\n\nPlease take immediate action to settle the outstanding balance to avoid any further complications. Attached to this email, you will find a copy of the invoice for your reference.\n\nIf you have already made the payment, please disregard this notice. Otherwise, kindly make the necessary arrangements to submit the payment at your earliest convenience.\n\nShould you require any assistance or have questions regarding the invoice, please don't hesitate to contact our accounts department at [Contact Email/Phone Number].\n\nThank you for your prompt attention to this matter.\n\nSincerely,\n\n[Your Name]\n[Your Position]\n[Your Company/Organization]`,
          // Add more email messages here
          `Subject: Update: Project Deadline Extension\n\nDear [Recipient's Name],\n\nI hope this message finds you well. I wanted to provide you with an update regarding the [Project Name] that we are currently working on together.\n\nDue to unforeseen circumstances, we have decided to extend the project deadline to ensure that we deliver the highest quality results. The new deadline for project completion is now [New Deadline Date].\n\nWe understand that this extension may impact your schedule, and we sincerely apologize for any inconvenience it may cause. Rest assured, we are committed to working closely with you to minimize any disruptions and ensure a successful outcome.\n\nIf you have any questions or concerns regarding the revised timeline, please don't hesitate to reach out to me directly.\n\nThank you for your understanding and cooperation.\n\nBest regards,\n\n[Your Name]\n[Your Position]\n[Your Company/Organization]`,
          // Add more email messages here
      ];
      const emailSubjects = [
        "Meeting Agenda for Tomorrow's Presentation",
        "Update: Project Deadline Extension",
        "Invitation to Participate in Customer Feedback Survey",
        "Urgent: Action Required - Payment Overdue",
        "Thank You for Your Recent Purchase!",
        "Reminder: Upcoming Team Building Event",
        "Exciting News: Product Launch Event Invitation",
        "Request for Proposal Submission Guidelines",
        "Important Announcement: Changes to Company Policies",
        "Congratulations! You've Won a Prize"
    ];
        const randomEmailMessages = emailMessages[Math.floor(Math.random() * emailMessages.length)];
        const randomMailSubjects = emailSubjects[Math.floor(Math.random() * emailSubjects.length)];
        console.log(randomEmailMessages)
        return { randomEmailMessages,randomMailSubjects };
      };
      
      const generateReservationsArray = (count) => {
        const reservations = [];
        for (let i = 0; i < count; i++) {
          reservations.push(generateRandomReservation());
        }
        return reservations;
      };
      const [reservations,setReservations] = useState(generateReservationsArray(20))
      const [deleteReservationId,setDeleteReservationId] = useState(null)
  return (
    <>
    <div className="m-4 pb-8 space-y-4">
        <p className="font-medium text-[12px]">Notifications</p>
    <div className=" rounded-lg border-gray-100 border-[1px] overflow-x-auto">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr className="">
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Sr.No</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Notification Title</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Notification Descriptions</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
          </tr>
        </thead>
        <tbody className="bg-white">

         {reservations.map((item, index) => (
             <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-200">
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{index + 1}</td>
              <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.randomMailSubjects.split(':')[0]}</td>
              <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.randomEmailMessages.split(' [')[0]}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">
              <button onClick={(e)=>{
                e.stopPropagation()
                setDeleteReservationId(index)
                }}><Trash size={20}  className="" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    </div>
    <DeleteModalComponent onCancel={()=>{setDeleteReservationId(null)}} active={deleteReservationId} />
    </>
  )
}

export default NotificationTable