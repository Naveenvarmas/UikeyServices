import SettingsTabs from "@/components/settings/settings-tabs";

import BusinessInfoCard from "@/components/settings/business-info-card";
import AccountSecurityCard from "@/components/settings/account-security-card";
import NotificationPreferencesCard from "@/components/settings/notification-preferences-card";
import StorePreferencesCard from "@/components/settings/store-preferences-card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="text-muted-foreground mt-1">
          Manage your account, store preferences and security settings.
        </p>
      </div>

      {/* Tabs */}
      <SettingsTabs />

      {/* Settings Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <BusinessInfoCard />

        <AccountSecurityCard />

        <NotificationPreferencesCard />

        <StorePreferencesCard />

      </div>

    </div>
  );
}