import React, { useState } from 'react';
import { Download, FileCode, FileSpreadsheet, Check } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';
import { AnimatedButton } from '../common/AnimatedButton';

export const BackupSection: React.FC = () => {
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  const triggerMockDownload = (format: 'json' | 'csv') => {
    setDownloadedFormat(format);
    const dataStr =
      format === 'json'
        ? JSON.stringify(
            {
              app: 'Taskora',
              version: '1.0.0',
              exportedAt: new Date().toISOString(),
              tasksCount: 148,
              projectsCount: 8,
              tagsCount: 12,
            },
            null,
            2
          )
        : 'TaskID,Title,Category,Priority,Completed,DueDate\n1,"Review Architecture","Engineering","Urgent",true,"2026-08-17"\n2,"Design Focus UI","Design","High",true,"2026-08-17"';

    const blob = new Blob([dataStr], { type: format === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = format === 'json' ? 'taskora-backup-2026-08-17.json' : 'taskora-tasks-export.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadedFormat(null), 3000);
  };

  return (
    <section id="backup" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Sovereignty & Portability</span>
          <h2 className="text-gradient-hero">Protect your productivity.</h2>
          <p>
            Your tasks and notes never get trapped in a proprietary walled garden. Export atomic JSON snapshots or clean CSV sheets whenever you want.
          </p>
        </div>

        {/* 2 Interactive Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: Full JSON Atomic Backup */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.2) 0%, rgba(94, 92, 230, 0.2) 100%)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileCode size={22} />
              </div>
              <PillBadge label="Full Snapshot • JSON" variant="accent" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Atomic JSON Backup</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Complete snapshot including all tasks, subtasks, projects, tag associations, time format preferences, and streak telemetry.
            </p>

            {/* Spec breakdown pill box */}
            <div
              style={{
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'var(--pillBackground)',
                border: '1px solid var(--subtleBorder)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                fontSize: '0.82rem',
                color: 'var(--textSecondary)',
              }}
            >
              <span>148 Tasks • 8 Projects</span>
              <strong style={{ color: 'var(--textPrimary)' }}>~2.4 MB</strong>
            </div>

            <AnimatedButton
              variant="primary"
              size="md"
              icon={downloadedFormat === 'json' ? <Check size={16} /> : <Download size={16} />}
              isDownloadAction
              onClick={() => triggerMockDownload('json')}
              style={{ width: '100%' }}
            >
              {downloadedFormat === 'json' ? 'Exported JSON Successfully!' : 'Export JSON Backup'}
            </AnimatedButton>
          </GlassSurface>

          {/* Card 2: Clean CSV Spreadsheet Export */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(48, 209, 88, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileSpreadsheet size={22} />
              </div>
              <PillBadge label="Spreadsheet • CSV" variant="success" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>CSV Data Export</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Universal comma-separated format compatible with Excel, Google Sheets, Notion, Obsidian, and custom data processing scripts.
            </p>

            <div
              style={{
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'var(--pillBackground)',
                border: '1px solid var(--subtleBorder)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                fontSize: '0.82rem',
                color: 'var(--textSecondary)',
              }}
            >
              <span>Titles, Due Dates, Status</span>
              <strong style={{ color: 'var(--textPrimary)' }}>~128 KB</strong>
            </div>

            <AnimatedButton
              variant="secondary"
              size="md"
              icon={downloadedFormat === 'csv' ? <Check size={16} /> : <Download size={16} />}
              isDownloadAction
              onClick={() => triggerMockDownload('csv')}
              style={{ width: '100%' }}
            >
              {downloadedFormat === 'csv' ? 'Exported CSV Successfully!' : 'Export CSV Spreadsheet'}
            </AnimatedButton>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};
