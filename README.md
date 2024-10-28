# **Cost Analysis and Deployment & Upkeep Plan for BYX Island Party 2025 Website**

---

## **Table of Contents**

1. [Introduction](#introduction)
2. [Cost Analysis](#cost-analysis)
   - [1. Domain Name Registration](#1-domain-name-registration)
   - [2. Web Hosting](#2-web-hosting)
   - [3. SSL Certificate](#3-ssl-certificate)
   - [4. Content Delivery Network (CDN)](#4-content-delivery-network-cdn)
   - [5. Maintenance and Updates](#5-maintenance-and-updates)
3. [Deployment Steps and Requirements](#deployment-steps-and-requirements)
   - [Prerequisites](#prerequisites)
   - [1. Prepare Website Files](#1-prepare-website-files)
   - [2. Register a Domain Name](#2-register-a-domain-name)
   - [3. Choose a Web Hosting Provider](#3-choose-a-web-hosting-provider)
   - [4. Set Up the Hosting Environment](#4-set-up-the-hosting-environment)
   - [5. Deploy Website Files](#5-deploy-website-files)
   - [6. Configure DNS Settings](#6-configure-dns-settings)
   - [7. Enable SSL Certificate](#7-enable-ssl-certificate)
   - [8. Test the Deployment](#8-test-the-deployment)
   - [9. Set Up Backups and Monitoring](#9-set-up-backups-and-monitoring)

---

## **Introduction**

This document outlines a comprehensive plan for deploying and maintaining the **BYX Island Party 2025** website. It includes a detailed cost analysis for the deployment and upkeep, as well as step-by-step instructions on how to deploy the website.

The website is a static site built with HTML, CSS (Tailwind CSS), JavaScript, and incorporates features like Swiper.js for sliders and Alpine.js for interactivity.

---

## **Cost Analysis**

Deploying and maintaining a website involves several cost components. Below is a breakdown of the expected costs:

### **1. Domain Name Registration**

**Estimated Cost:** \$10 - \$20 per year

- **Description:** Purchasing a custom domain name (`byxislandparty.org` since .com is taken).
- **Providers:**
  - [Namecheap](https://www.namecheap.com/) - Starting at \$7.48/first year, then $12.98.
  - [GoDaddy](https://www.godaddy.com/) - Starting at \$9.99/first year, then $22.99.

### **2. Web Hosting**

**Estimated Cost:** \$0 - \$100 per year (depending on the hosting plan)

- **Options:**
  - **Static Site Hosting (Free or Low-Cost, but no custom domain support):**
    - [GitHub Pages](https://pages.github.com/) - Free.
    - [Netlify](https://www.netlify.com/) - Free tier available.
    - [Vercel](https://vercel.com/) - Free tier available.
  - **Shared Hosting:**
    - [Bluehost](https://www.bluehost.com/) - Starting at \$11.99/month.
    - [HostGator](https://www.hostgator.com/) - Starting at \$10.99/month.
    - [Hostinger](https://www.hostinger.com/) - Starting at \$2.49/month but must pay for 48 months.

### **3. SSL Certificate**

**Estimated Cost:** \$0 per year
  - **Recommendation:** Use a hosting provider that offers free SSL certificates.

### **4. Content Delivery Network (CDN)**

**Estimated Cost:** \$0 - \$20 per month (optional)

- **Description:** A CDN improves website performance by distributing content across global servers.
- **Options:**
  - [Cloudflare CDN](https://www.cloudflare.com/cdn/) - Free and paid plans.
  - **Recommendation:** Utilize Cloudflare's free plan to enhance performance and security.

### **5. Maintenance and Updates**

**Estimated Cost:** \$0 per year (if we do it ourselves)

- **Description:** Regular updates, backups, security monitoring, and content changes.
- **Options:**
  - **Self-maintenance:** No additional cost but requires time investment.
  - **Hiring Professionals:** $$$
  - **Recommendation:** Assign a team member to handle routine maintenance.

---

### **Summary of Estimated Annual Costs**

| Item                        | Estimated Cost (Annual) |
|-----------------------------|------------------------|
| Domain Name                 | \$10 - \$20            |
| Web Hosting                 | \$30 - \$100           |
| SSL Certificate             | \$0                    |
| CDN (Optional)              | \$0 - \$240            |
| Maintenance and Updates     | \$0                    |
| **Total Estimated Cost**    | **\$40 - \$360**     |

---

## **Deployment Steps and Requirements**

### **Prerequisites**

- **Technical Knowledge:**
  - Basic understanding of web hosting, and Git.
- **Tools Needed:**
  - A code editor (e.g., Visual Studio Code).
  - Git (for version control).

---

### **1. Prepare Website Files**

- **Ensure all files are organized:**
  - `index.html`
  - `styles.css`
  - `scripts.js`
  - Assets (images, fonts, etc.) in appropriate folders (e.g., `images/`, `videos/`).
- **Test Locally:**
  - Open `index.html` in a browser to ensure everything works as expected.
  - Check for broken links, missing images, and console errors.

### **2. Register a Domain Name**

- **Choose a Domain Registrar:**
  - Use providers like Namecheap or GoDaddy.
- **Search and Register:**
  - Check availability of domain (e.g., `byxislandparty.org`).
  - Purchase the domain and set up an account.

### **3. Choose a Web Hosting Provider**

**Option A: Static Site Hosting (Recommended for this project)**

- **Providers:**
  - **Netlify**
    - Offers free hosting for static sites.
    - Easy deployment via Git repositories.
  - **Vercel**
    - Similar to Netlify, with a focus on frontend developers.
- **Benefits:**
  - Free SSL certificates.
  - Continuous deployment from Git repositories.
  - Built-in CDN for fast content delivery.

**Option B: Traditional Hosting**

- **Providers:**
  - Bluehost, HostGator, SiteGround, etc.
- **Requirements:**
  - Ensure the hosting plan supports static websites.
  - Access to cPanel or similar for easy management.

### **4. Set Up the Hosting Environment**

**Using Netlify or Vercel:**

- **Create an Account:**
  - Sign up for a free account on Netlify or Vercel.
- **Connect Repository (If Using Git):**
  - Link your GitHub, GitLab, or Bitbucket repository.
- **Configure Build Settings:**
  - For static sites, no build command is needed.
- **Set Up Custom Domain:**
  - Add your custom domain in the site settings.
- **Configure DNS:**
  - Update your domain's DNS records to point to the hosting provider.

**Using Traditional Hosting:**

- **Access Control Panel:**
  - Log in to your hosting account's control panel.
- **Create a New Site/Add Domain:**
  - Add your domain to the hosting account.
- **Set Up FTP Account:**
  - Create an FTP user for file uploads.

### **5. Deploy Website Files**

**Using Netlify or Vercel:**

- **Deploy via Git:**
  - Push your website files to the connected Git repository.
  - The hosting service will automatically deploy the changes.
- **Manual Upload (If Not Using Git):**
  - Use the drag-and-drop feature to upload your site folder.

**Using Traditional Hosting:**

- **Upload via FTP:**
  - Connect to your server using an FTP client.
  - Upload all website files to the `public_html` or appropriate directory.
- **Upload via File Manager:**
  - Use the hosting control panel's file manager to upload files.

### **6. Configure DNS Settings**

- **Update Nameservers (If Required):**
  - If using Netlify or Vercel, you may need to update nameservers or add DNS records.
- **Add DNS Records:**
  - **A Record:** Points your domain to your server's IP address.
  - **CNAME Record:** Points subdomains to your main domain or hosting provider.
- **Propagation:**
  - DNS changes can take up to 24-48 hours to propagate worldwide.

### **7. Enable SSL Certificate**

- **Using Netlify or Vercel:**
  - SSL is typically enabled automatically.
- **Using Let's Encrypt (Traditional Hosting):**
  - Use the hosting control panel to activate Let's Encrypt SSL.
- **Verify HTTPS:**
  - Access your website via `https://yourdomain.com` to ensure SSL is active.

### **8. Test the Deployment**

- **Functional Testing:**
  - Navigate through the website to check all pages and links.
- **Cross-Browser Testing:**
  - Test the website on different browsers (Chrome, Firefox, Safari, Edge).
- **Responsive Testing:**
  - Ensure the website displays correctly on mobile devices and tablets.
- **Performance Testing:**
  - Use tools like [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to analyze performance.

### **9. Set Up Backups and Monitoring**

- **Backups:**
  - If using Git, your code repository serves as a backup.
  - For traditional hosting, consider setting up automated backups via the control panel.
- **Monitoring:**
  - Use uptime monitoring services like [UptimeRobot](https://uptimerobot.com/) to get alerts if the site goes down.
- **Analytics (Optional):**
  - Set up Google Analytics to track visitor data.

---

## **Additional Recommendations**

- **Content Updates:**
  - Establish a schedule for regular content updates leading up to the event.
- **Accessibility Compliance:**
  - Ensure the website meets accessibility standards (e.g., WCAG guidelines).
- **Legal Considerations:**
  - Include necessary disclaimers, privacy policies, and terms of service.
---

## **Resources**

- **Netlify Documentation:** [https://docs.netlify.com/](https://docs.netlify.com/)
- **Vercel Documentation:** [https://vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages Guide:** [https://guides.github.com/features/pages/](https://guides.github.com/features/pages/)
- **DNS Configuration Guide:** [https://www.cloudflare.com/learning/dns/dns-records/](https://www.cloudflare.com/learning/dns/dns-records/)

---

