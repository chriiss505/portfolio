import React from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation(); // Hook for translation

  return (
    <div style={{ padding: "100px", color: "var(--text-color)" }}>
      <h1>{t("privacyPolicy.title")}</h1>
      <p>{t("privacyPolicy.intro")}</p>

      <h2>{t("privacyPolicy.responsibleParty.title")}</h2>
      <p>{t("privacyPolicy.responsibleParty.description")}</p>

      <h2>{t("privacyPolicy.informationNotCollected.title")}</h2>
      <p>{t("privacyPolicy.informationNotCollected.description")}</p>

      <h2>{t("privacyPolicy.cookies.title")}</h2>
      <p>{t("privacyPolicy.cookies.description")}</p>

      <h2>{t("privacyPolicy.userRights.title")}</h2>
      <p>{t("privacyPolicy.userRights.intro")}</p>
      <ul>
        <li>{t("privacyPolicy.userRights.access")}</li>
        <li>{t("privacyPolicy.userRights.rectify")}</li>
        <li>{t("privacyPolicy.userRights.delete")}</li>
        <li>{t("privacyPolicy.userRights.restrict")}</li>
        <li>{t("privacyPolicy.userRights.portability")}</li>
        <li>{t("privacyPolicy.userRights.object")}</li>
      </ul>
      <p>{t("privacyPolicy.userRights.contact")}</p>

      <h2>{t("privacyPolicy.thirdPartyLinks.title")}</h2>
      <p>{t("privacyPolicy.thirdPartyLinks.description")}</p>

      <h2>{t("privacyPolicy.internationalDataTransfers.title")}</h2>
      <p>{t("privacyPolicy.internationalDataTransfers.description")}</p>

      <h2>{t("privacyPolicy.changes.title")}</h2>
      <p>{t("privacyPolicy.changes.description")}</p>

      <h2>{t("privacyPolicy.contactInformation.title")}</h2>
      <p>{t("privacyPolicy.contactInformation.description")}</p>

      <p>{t("privacyPolicy.lastUpdated")}</p>
    </div>
  );
};

export default PrivacyPolicy;
