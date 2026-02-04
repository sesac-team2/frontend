import os

def remove_use_client(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                    
                    new_lines = []
                    modified = False
                    for line in lines:
                        if 'use client' in line and (line.strip() == "'use client';" or line.strip() == '"use client";' or line.strip() == "'use client'" or line.strip() == '"use client"'):
                            modified = True
                            continue
                        new_lines.append(line)
                    
                    if modified:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.writelines(new_lines)
                        print(f"Modified: {path}")
                        count += 1
                except Exception as e:
                    print(f"Error reading {path}: {e}")
    print(f"Total files modified: {count}")

if __name__ == "__main__":
    remove_use_client('/Users/soobeenjang/Development/proov/frontend/src')
