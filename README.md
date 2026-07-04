# vuepress-diary

Official Diary of Ayush P Gupta built using VuePress framework.

Live Website: https://diary.ayushpgupta.com/

<img src="res/s1.png" alt="image"/>

## Getting Started

1. Clone the repository
2. Navigate to `docs/`
3. Run `npm run dev`
4. Open the localhost link as output in console.

## 🖼️ Image Optimization

To keep the page load times fast, you should run the image optimizer script whenever you add new high-resolution cover images or drawings to the `docs/src/.vuepress/public/` folder.

### Prerequisites
Make sure you have `Pillow` installed:
```bash
pip install Pillow
```

### Running the Optimizer
Navigate to the `docs/` folder and run the script:
```bash
cd docs
python3 optimize_images.py
```
This will automatically find any PNG images in the public folder, scale them down to a maximum width of 1200px (preserving aspect ratio) if they are too large, and apply lossless PNG compression in-place.

## 👍 Contribution

1. Clone it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## ✨ Active Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/apgapg>
            <img src=https://avatars.githubusercontent.com/u/13887407?v=4 width="100;"  alt=Ayush P Gupta/>
            <br />
            <sub style="font-size:14px"><b>Ayush P Gupta</b></sub>
        </a>
    </td>
</tr>
</table>
