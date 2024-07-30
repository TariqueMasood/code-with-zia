import * as React from "react";
import { Html, Row, Column } from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  mobileNumber: string;
}

export function Email({ name, email, message, mobileNumber }: EmailProps) {
  return (
    <Html lang="en">
      <Row>
        <Column>Name</Column>
        <Column>Email</Column>
        <Column>Message</Column>
        <Column>Mobile Number</Column>
      </Row>
      <Row>
        <Column>{name}</Column>
        <Column>{email}</Column>
        <Column>{message}</Column>
        <Column>{mobileNumber}</Column>
      </Row>
    </Html>
  );
}

export default Email;
