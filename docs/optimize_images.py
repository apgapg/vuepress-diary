import os
from PIL import Image

public_dir = "src/.vuepress/public"

for root, dirs, files in os.walk(public_dir):
    for file in files:
        if file.lower().endswith(".png"):
            filepath = os.path.join(root, file)
            print(f"Optimizing {filepath}...")
            img = Image.open(filepath)
            
            # Record original size
            orig_size = os.path.getsize(filepath)
            
            # Resize if wider than 1200px
            max_width = 1200
            if img.width > max_width:
                height = int((max_width / img.width) * img.height)
                img = img.resize((max_width, height), Image.Resampling.LANCZOS)
            
            # Save optimized PNG
            img.save(filepath, "PNG", optimize=True)
            new_size = os.path.getsize(filepath)
            print(f"Size reduced from {orig_size/1024/1024:.2f}MB to {new_size/1024/1024:.2f}MB ({((orig_size - new_size)/orig_size)*100:.1f}% reduction)")
