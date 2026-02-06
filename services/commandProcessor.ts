
import React from 'react';
import { CommandResult, LineType } from '../types';
import { PROJECTS } from '../constants';

export const processCommand = (input: string): CommandResult[] => {
  const args = input.toLowerCase().split(' ');
  const cmd = args[0];

  switch (cmd) {
    case 'help':
      return [{
        type: LineType.OUTPUT,
        content: `Available commands:
  help               - Shows this menu
  about              - Learn about my professional background
  skills             - View my technical stack
  projects           - List all highlighted projects
  project <name>     - Show details for a specific project
  education          - My academic journey
  contact            - Get in touch
  resume             - Preview resume summary
  download resume    - Trigger resume PDF download
  theme <name>       - Switch shell theme (matrix, cyber, dracula, amber)
  clear              - Wipe terminal history`
      }];

    case 'theme':
      const themeId = args[1];
      const themes = ['matrix', 'cyber', 'dracula', 'amber'];
      if (!themeId) {
        return [{
          type: LineType.OUTPUT,
          content: `Available themes: ${themes.join(', ')}\nUsage: theme <name>`
        }];
      }
      if (themes.includes(themeId)) {
        return [{
          type: LineType.SUCCESS,
          content: `Switching theme to: ${themeId}... Done.`
        }];
      }
      return [{
        type: LineType.ERROR,
        content: `Error: Theme '${themeId}' not recognized. Try: ${themes.join(', ')}`
      }];

    case 'about':
      return [{
        type: LineType.OUTPUT,
        content: `I'm Shilpa, the Creatively Complexive (Cret Com), 
an Infosys Springboard intern and an enthusiastic B.Tech graduate in Artificial Intelligence at Madanapalle Institute of Technology and Science, driven by curiosity and the one possess strong desire to solve real-world problems around me...! 

I have been developing Web and Andriod Applications like CretCom Study Portal, AI health Assistant Chatbot for hospitals, Attendrix etc., 

I had worked on OpenCV projects for almost 1 and half year. 

Currently, I am mastering Java - DSA to crack low to medium level interviews going deep in understanding. 

Moreover, I'm also focussing on building hands-on experience in Machine Learning and Data Science. My learning journey includes working on end-to-end ML projects-from data preprocessing and feature engineering to model training, evaluation, and deployment.

I enjoy working with Python, Pandas, and Scikit-Learn as part of developing AI applications
Also, includes Flutter (DART), Andriod Studio (using Java/Kotlin), React JS majorly. 

I'm learning how to deploy ML models using cloud platforms.`
      }];

    case 'skills':
      return [{
        type: LineType.OUTPUT,
        content: `TECHNICAL ARSENAL:
--------------------------------------------------
Programming Languages:    Java (DSA focus), Python, SQL
Frontend:     React.js, Flask 
Mobile:       Flutter, Dart, Kotlin
Backend:      MySQL, Node.js
AI / ML:      OpenCV, NLP, Deep Learning, Generative AI
Cloud:        AWS
Tools:        Git, GitHub, VS Code, IntelliJ IDEA

I believe mastery is not about knowing a single technology in isolation, 
but about the ability to adapt, learn, and apply what a problem truly demands. 
My learning is project-driven—I absorb the required tools and concepts as needed to build 
meaningful, working solutions. This approach has shaped my journey across web, mobile, AI, and machine learning, 
continuously deepening my technical understanding.
`
      }];

    case 'projects':
      return [{
        type: LineType.OUTPUT,
        content: `HIGHLIGHTED WORKS:
--------------------------------------------------
${PROJECTS.map(p => `• ${p.name.padEnd(20)} - Type 'project ${p.id}'`).join('\n')}
--------------------------------------------------`
      }];

    case 'project':
      const projectId = args[1];
      if (!projectId) {
        return [{ type: LineType.ERROR, content: "Error: Please specify a project ID. Try 'projects' to see IDs." }];
      }
      const project = PROJECTS.find(p => p.id === projectId);
      if (!project) {
        return [{ type: LineType.ERROR, content: `Error: Project '${projectId}' not found.` }];
      }
      return [{
        type: LineType.JSX,
        content: React.createElement('div', { 
            className: "border border-[var(--border)] p-4 my-2 rounded-sm bg-[var(--primary)]/5" 
          },
          React.createElement('h3', { className: "text-xl font-bold text-[var(--primary)] glow-text mb-2" }, `[ ${project.name} ]`),
          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
            React.createElement('div', null,
              React.createElement('p', { className: "text-[var(--primary)] opacity-90 mb-4" }, project.description),
              React.createElement('div', { className: "mb-2" },
                React.createElement('span', { className: "text-[var(--accent)] font-bold" }, "Tech Stack:"),
                React.createElement('span', { className: "text-white ml-2 opacity-80" }, project.tech.join(', '))
              ),
              React.createElement('div', { className: "mb-4" },
                React.createElement('span', { className: "text-[var(--accent)] font-bold" }, "Repository:"),
                React.createElement('a', { 
                  href: project.githubUrl, 
                  target: "_blank", 
                  rel: "noopener noreferrer",
                  className: "text-[var(--secondary)] hover:underline ml-2 italic"
                }, project.githubUrl)
              )
            ),
            project.imageUrl ? React.createElement('div', { className: "relative group" },
              React.createElement('img', { 
                src: project.imageUrl, 
                alt: project.name, 
                className: "w-full h-40 object-cover border border-[var(--border)] rounded grayscale hover:grayscale-0 transition-all duration-500"
              }),
              React.createElement('div', { className: "absolute inset-0 bg-[var(--primary)]/10 group-hover:bg-transparent transition-colors" })
            ) : null
          ),
          React.createElement('div', { className: "text-[10px] text-[var(--border)] mt-2 uppercase tracking-tighter" }, "System Output: End of Object Record")
        )
      }];

    case 'education':
      return [{
        type: LineType.OUTPUT,
        content: `ACADEMIC JOURNEY:
--------------------------------------------------
Degree:       B.Tech in CSE (AI) - MITS, Madanapalle
Location:     Madanapalle Institute of Technology & Science
Focus:        Concerned on solving Real-world problems especially around me.
Performance:  Adaptability to learn technologies,tools specifically required to my Project`
      }];

    case 'contact':
      return [{
        type: LineType.OUTPUT,
        content: `CONNECT WITH ME:
--------------------------------------------------
Location:     Madanapalle, Andhra Pradesh, India
Email:        shilpa.aitech@gmail.com
GitHub:       https://github.com/ShilpaChinnakkagari
LinkedIn:     linkedin.com/in/shilpa-chinnakkagari56085341
--------------------------------------------------`
      }];

    case 'resume':
      return [{
        type: LineType.OUTPUT,
        content: `RESUME PREVIEW (Executive Summary):
--------------------------------------------------
I'm Shilpa, the Creatively Complexive (Cret Com), 
an Infosys Springboard intern and an enthusiastic B.Tech graduate in Artificial Intelligence at Madanapalle Institute of Technology and Science, driven by curiosity and the one possess strong desire to solve real-world problems around me...! 

I have been developing Web and Andriod Applications like CretCom Study Portal, AI health Assistant Chatbot for hospitals, Attendrix etc., 

I had worked on OpenCV projects for almost 1 and half year. 

Currently, I am mastering Java - DSA to crack low to medium level interviews going deep in understanding. 

Moreover, I'm also focussing on building hands-on experience in Machine Learning and Data Science. My learning journey includes working on end-to-end ML projects-from data preprocessing and feature engineering to model training, evaluation, and deployment.

I enjoy working with Python, Pandas, and Scikit-Learn as part of developing AI applications
Also, includes Flutter (DART), Andriod Studio (using Java/Kotlin), React JS majorly. 

I'm learning how to deploy ML models using cloud platforms.
--------------------------------------------------
Type 'download resume' to get the full PDF.`
      }];

    case 'download':
      if (args[1] === 'resume') {
        return [{
          type: LineType.SUCCESS,
          content: "Initiating secure download... [File: Shilpa_Resume.pdf]"
        }];
      }
      return [{ type: LineType.ERROR, content: "Usage: 'download resume'" }];

    default:
      return [{
        type: LineType.ERROR,
        content: `Command not found: ${cmd}. Type 'help' for assistance.`
      }];
  }
};
