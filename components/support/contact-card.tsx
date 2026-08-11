"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ContactCard() {
  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          Contact Us
        </h3>

        <p className="text-sm text-muted-foreground mb-6">
          Our support team is here to help you.
        </p>

        <div className="space-y-5">
          <div className="flex gap-3">
            <Mail className="h-5 w-5 text-violet-600 mt-1" />

            <div>
              <p className="font-medium">
                Email Support
              </p>

              <p className="text-sm text-muted-foreground">
                support@apnidigi.com
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <MessageCircle className="h-5 w-5 text-green-600 mt-1" />

            <div>
              <p className="font-medium">
                WhatsApp Support
              </p>

              <p className="text-sm text-muted-foreground">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-blue-600 mt-1" />

            <div>
              <p className="font-medium">
                Call Us
              </p>

              <p className="text-sm text-muted-foreground">
                Mon - Sat, 10 AM - 6 PM
              </p>

              <p className="text-sm text-muted-foreground">
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-6"
        >
          Start Live Chat
        </Button>
      </CardContent>
    </Card>
  );
}