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

Moreover, I'm also focussing on building hands-on experience in Machine Learning and Deep LEARNING. My learning journey includes working on end-to-end ML projects-from data preprocessing and feature engineering to model training, evaluation, and deployment.

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
${PROJECTS.map(p => `• ${p.name.padEnd(25)} - Type 'project ${p.id}'`).join('\n')}
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
      
      // Create image component with proper styling
      const renderProjectImage = () => {
        if (!project.imageUrl) {
          return React.createElement('div', { 
            className: "w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 border border-[var(--border)] rounded-lg flex items-center justify-center"
          },
            React.createElement('span', { className: "text-gray-500 italic text-sm" }, "No preview available")
          );
        }
        
        return React.createElement('div', { 
          className: "relative w-full h-48 overflow-hidden rounded-lg border border-[var(--border)] group" 
        },
          // Image container with fixed dimensions
          React.createElement('div', { className: "absolute inset-0 bg-gray-900 flex items-center justify-center" },
            React.createElement('img', { 
              src: project.imageUrl, 
              alt: project.name, 
              className: "min-w-full min-h-full object-cover transition-all duration-500 group-hover:scale-110",
              style: { 
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              },
              onError: (e) => {
                // Fallback images based on project type
                let fallbackImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500';
                
                if (project.id.includes('health')) {
                  fallbackImage = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800&h=500';
                } else if (project.id.includes('study') || project.id.includes('cretcom')) {
                  fallbackImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500';
                } else if (project.id.includes('certif')) {
                  fallbackImage = 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800&h=500';
                } else if (project.id.includes('comm')) {
                  fallbackImage = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500';
                } else if (project.id.includes('complaint')) {
                  fallbackImage = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=500';
                }
                
                e.currentTarget.src = fallbackImage;
                e.currentTarget.alt = `${project.name} - Preview`;
                e.currentTarget.className = "min-w-full min-h-full object-cover transition-all duration-500 group-hover:scale-110";
              },
              loading: "lazy"
            })
          ),
          // Overlay effect on hover
          React.createElement('div', { 
            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          }),
          // Zoom indicator
          React.createElement('div', { 
            className: "absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          }, "🔍 View")
        );
      };
      
      return [{
        type: LineType.JSX,
        content: React.createElement('div', { 
            className: "border border-[var(--border)] p-4 my-2 rounded-lg bg-[var(--primary)]/5 backdrop-blur-sm" 
          },
          // Project Title
          React.createElement('div', { className: "flex items-center gap-2 mb-4" },
            React.createElement('div', { className: "w-2 h-6 bg-[var(--accent)] rounded-full" }),
            React.createElement('h3', { className: "text-xl font-bold text-[var(--primary)] glow-text" }, project.name)
          ),
          
          // Project Content Grid
          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
            // Left Column: Description and Details
            React.createElement('div', { className: "space-y-4" },
              // Description
              React.createElement('div', null,
                React.createElement('p', { className: "text-[var(--primary)] opacity-90 leading-relaxed" }, project.description)
              ),
              
              // Tech Stack
              React.createElement('div', { className: "space-y-2" },
                React.createElement('div', { className: "flex items-center gap-2" },
                  React.createElement('span', { className: "text-[var(--accent)] font-bold text-sm" }, "⚙️ Tech Stack:"),
                  React.createElement('div', { className: "flex flex-wrap gap-2" },
                    ...project.tech.map(tech => 
                      React.createElement('span', { 
                        key: tech,
                        className: "px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs rounded-full border border-[var(--border)]"
                      }, tech)
                    )
                  )
                )
              ),
              
              // GitHub Link
              React.createElement('div', { className: "pt-2" },
                React.createElement('div', { className: "flex items-center gap-2" },
                  React.createElement('span', { className: "text-[var(--accent)] font-bold text-sm" }, "🔗 Repository:"),
                  React.createElement('a', { 
                    href: project.githubUrl, 
                    target: "_blank", 
                    rel: "noopener noreferrer",
                    className: "text-[var(--secondary)] hover:text-[var(--accent)] hover:underline text-sm italic transition-colors break-all"
                  }, project.githubUrl)
                )
              )
            ),
            
            // Right Column: Image
            React.createElement('div', { className: "flex flex-col" },
              renderProjectImage(),
              // Image caption
              React.createElement('div', { className: "mt-2 text-center" },
                React.createElement('span', { className: "text-gray-500 text-xs italic" }, "Project Preview")
              )
            )
          ),
          
          // Footer
          React.createElement('div', { className: "mt-4 pt-3 border-t border-[var(--border)]/30" },
            React.createElement('div', { className: "flex justify-between items-center" },
              React.createElement('span', { className: "text-[10px] text-[var(--border)] uppercase tracking-tighter" }, "System Output: Project Details"),
              React.createElement('span', { className: "text-[10px] text-[var(--accent)]/70 uppercase tracking-tighter" }, "ID: " + project.id)
            )
          )
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

Moreover, I'm also focussing on building hands-on experience in Machine Learning and Deep LEarning. My learning journey includes working on end-to-end ML projects-from data preprocessing and feature engineering to model training, evaluation, and deployment.

I enjoy working with Python, Pandas, and Scikit-Learn as part of developing AI applications
Also, includes Flutter (DART), Andriod Studio (using Java/Kotlin), React JS majorly. 

I'm learning how to deploy ML models using cloud platforms.
--------------------------------------------------
Type 'download resume' to get the full PDF.`
      }];

    case 'download':
      if (args[1] === 'resume') {
        return [
          {
            type: LineType.SUCCESS,
            content: "📄 Resume download initiated..."
          },
          {
            type: LineType.OUTPUT,
            content: "Your resume should start downloading automatically.\nIf it doesn't download:\n1. Check browser popup blocker\n2. Look for Google Drive tab\n3. Click the download button (↓)\n\nDirect link: https://drive.google.com/file/d/1Alcm_dig4wF1xmICJMS8ypJVY2gqjnkx/view"
          }
        ];
      }
      return [{ type: LineType.ERROR, content: "Usage: 'download resume'" }];

    default:
      return [{
        type: LineType.ERROR,
        content: `Command not found: ${cmd}. Type 'help' for assistance.`
      }];
  }
};