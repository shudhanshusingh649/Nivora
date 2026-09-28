import Header from "@/components/Header";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function TermsAndConditions() {
  return (
    <View className="flex-1 bg-white">
      <Header title="Terms & Conditions" showBack={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        className="px-6 pt-6"
      >
        <Text className="font-sans-bold text-slate-500 text-[13px] uppercase tracking-wider mb-2">
          Last Updated: September 28, 2026
        </Text>
        <Text className="font-sans-extrabold text-2xl text-slate-900 mb-6 tracking-tight">
          Agreement of Service
        </Text>

        <Text className="font-sans-medium text-[15px] text-slate-600 leading-6 mb-8">
          Welcome to Zeevo. By accessing or using our mobile application, you
          agree to be bound by these Terms and Conditions. Please read them
          carefully before using our services.
        </Text>

        {/* Sections */}
        <Section title="1. Acceptance of Terms">
          By creating an account, whether as a User or a Property Provider, you
          agree to comply with and be legally bound by these terms. If you do
          not agree to these terms, you have no right to obtain information from
          or otherwise continue using our platform.
        </Section>

        <Section title="2. User Accounts">
          You must provide accurate, current, and complete information during
          the registration process. You are responsible for safeguarding your
          password and for all activities that occur under your account. Zeevo
          reserves the right to suspend or terminate your account if any
          information provided proves to be inaccurate or fraudulent.
        </Section>

        <Section title="3. Property Providers">
          If you list a property ("Provider"), you are solely responsible for
          ensuring the accuracy of the listing, including availability, pricing,
          and property conditions. You must have the legal right to list the
          property and must not violate any local lease agreements or laws.
        </Section>

        <Section title="4. Booking & Payments">
          Zeevo facilitates the connection between users and providers. While we
          may provide payment gateways for convenience, the ultimate transaction
          and agreement are between the user and the provider. Zeevo is not
          liable for disputes arising from refunds, damages, or cancellations.
        </Section>

        <Section title="5. Prohibited Activities">
          You agree not to engage in any of the following prohibited activities:
          {"\n"}• Using the platform for any illegal purpose.
          {"\n"}• Harassing or discriminating against other users or providers.
          {"\n"}• Uploading malicious code, viruses, or spam.
          {"\n"}• Scraping data or attempting to bypass security measures.
        </Section>

        <Section title="6. Limitation of Liability">
          To the maximum extent permitted by law, Zeevo shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          or any loss of profits or revenues, whether incurred directly or
          indirectly, resulting from your use of the app.
        </Section>

        <Section title="7. Modifications to Terms">
          We reserve the right to modify these terms at any time. We will
          provide notice of these changes by updating the "Last Updated" date at
          the top of this page. Your continued use of the app after any changes
          constitutes your acceptance of the new terms.
        </Section>

        <View className="mt-8 mb-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
          <Text className="font-sans-bold text-slate-900 text-[15px] mb-2">
            Have questions?
          </Text>
          <Text className="font-sans-medium text-slate-600 text-[14px] leading-5">
            If you have any questions about these Terms, please contact our
            legal team at{" "}
            <Text className="text-emerald-700 font-sans-bold">
              legal@zeevo.com
            </Text>
            .
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Reusable Section Component for cleaner code
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View className="mb-6">
    <Text className="font-sans-extrabold text-[17px] text-slate-900 mb-2.5 tracking-tight">
      {title}
    </Text>
    <Text className="font-sans-medium text-[15px] text-slate-600 leading-6">
      {children}
    </Text>
  </View>
);
