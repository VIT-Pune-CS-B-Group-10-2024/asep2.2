import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Input, Label, Select } from '../components/Common';

const SettingsContainer = styled.div`
  padding: 20px;
`;

const SettingsSection = styled(Card)`
  margin-bottom: 20px;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.primary};
`;

function Settings() {
  const [settings, setSettings] = useState({
    companyName: 'My Business',
    defaultCurrency: 'USD',
    notificationEmail: 'admin@mybusiness.com',
    dataRefresh: 24,
    theme: 'light'
  });

  const [apiKey, setApiKey] = useState('••••••••••••••••');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveSettings = () => {
    // In a real app, you would save to your backend here
    console.log('Settings saved:', settings);
    setIsEditing(false);
  };

  return (
    <SettingsContainer>
      <h1>Settings</h1>
      
      <SettingsSection>
        <SectionTitle>Company Information</SectionTitle>
        
        <Label>
          Company Name
          <Input 
            type="text" 
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Label>
        
        <Label>
          Default Currency
          <Select 
            name="defaultCurrency"
            value={settings.defaultCurrency}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="INR">Indian Rupee (INR)</option>
          </Select>
        </Label>
        
        <Label>
          Notification Email
          <Input 
            type="email" 
            name="notificationEmail"
            value={settings.notificationEmail}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Label>
      </SettingsSection>
      
      <SettingsSection>
        <SectionTitle>Application Settings</SectionTitle>
        
        <Label>
          Theme
          <Select 
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </Select>
        </Label>
        
        <Label>
          Data Refresh Frequency (hours)
          <Input 
            type="number" 
            name="dataRefresh"
            value={settings.dataRefresh}
            onChange={handleChange}
            min="1"
            max="168"
            disabled={!isEditing}
          />
        </Label>
      </SettingsSection>
      
      <SettingsSection>
        <SectionTitle>API Integration</SectionTitle>
        
        <Label>
          API Key
          <div style={{ display: 'flex', gap: '10px' }}>
            <Input 
              type={isEditing ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              disabled={!isEditing}
              style={{ flex: 1 }}
            />
            <Button small onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>
        </Label>
      </SettingsSection>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <Button primary onClick={saveSettings}>Save Changes</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <Button primary onClick={() => setIsEditing(true)}>Edit Settings</Button>
        )}
      </div>
    </SettingsContainer>
  );
}

export default Settings;