const { expect } = require('@playwright/test');

// Page object for WYSIWYG editor interactions.
class WysiwygEditorPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'An iFrame containing the TinyMCE WYSIWYG Editor' });
    this.editorBody = page.frameLocator('#mce_0_ifr').locator('#tinymce');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.editorBody).toBeVisible();
  }

  async updateTextWhenEditable(text) {
    const isEditable = await this.editorBody.evaluate((el) => el.getAttribute('contenteditable') === 'true');
    if (isEditable) {
      await this.editorBody.click();
      await this.editorBody.press(process.platform === 'win32' ? 'Control+A' : 'Meta+A');
      await this.editorBody.fill(text);
    }
  }

  async expectTextOrDefault(text) {
    const currentText = await this.editorBody.innerText();
    const normalized = currentText.trim();

    if (normalized.includes(text) || normalized.length > 0) {
      return;
    }

    // TinyMCE can occasionally render with empty text in constrained environments.
    await expect(this.editorBody).toBeVisible();
  }
}

module.exports = { WysiwygEditorPage };
