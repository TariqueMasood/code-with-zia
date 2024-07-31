import * as React from "react";
import { Html, Section, Container, Heading } from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  mobileNumber: string;
}

export function Email({ name, email, message, mobileNumber }: EmailProps) {
  return (
    <Html lang="en">
      <Section
        style={{
          padding: "1.5rem",
          textAlign: "center",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Container
          style={{
            maxWidth: "800px",
            width: "100%",
            margin: "auto",
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <Heading
            style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}
          >
            Contact Details - {name.toUpperCase()}
          </Heading>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
              border: "1px solid #ddd",
            }}
          >
            <thead style={{ backgroundColor: "#f4f4f4" }}>
              <tr>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                >
                  Mobile Number
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                >
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {name}
                </td>
                <td
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {email}
                </td>
                <td
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {mobileNumber}
                </td>
                <td
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {message}
                </td>
              </tr>
            </tbody>
          </table>
          <Section
            style={{
              textAlign: "center",
              padding: "1rem",
              fontSize: "12px",
              color: "#ccc",
              backgroundColor: "#333",
            }}
          >
            © 2024 Code with Zia. All rights reserved.
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

export default Email;
